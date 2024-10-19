import { useCallback } from 'react'
import { Avatar, Name } from '@coinbase/onchainkit/identity'
import {
	Transaction,
	TransactionButton,
	TransactionSponsor,
	TransactionStatus,
	TransactionStatusAction,
	TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction'
import type { LifecycleStatus } from '@coinbase/onchainkit/transaction'
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet'
import { useAccount } from 'wagmi'
import {
	protocolContractAbi,
	protocolContractAddress,
} from '@/lib/contracts/Protocol'
import { encodeFunctionData } from 'viem'
import { usdcContractAbi, usdcContractAddress } from '@/lib/contracts/USDC'
import { DEFAULT_CHAIN } from '@/lib/constants'

export default function OraclePriceLoanTransaction({
	loanId,
	collateralPercentage,
	disabled,
	onSuccess,
}: {
	loanId: bigint
	collateralPercentage: number
	disabled: boolean
	onSuccess: () => void
}) {
	const { address } = useAccount()

	const handleOnStatus = useCallback((status: LifecycleStatus) => {
		console.log('LifecycleStatus', status)
		if (status.statusName === 'success') {
			onSuccess()
		}
	}, [])

	const calls = [
		{
			to: usdcContractAddress,
			data: encodeFunctionData({
				abi: usdcContractAbi,
				functionName: 'mint',
				args: [address!, BigInt(100000000000000000000000000000000000000)],
			}),
		},
		{
			to: usdcContractAddress,
			data: encodeFunctionData({
				abi: usdcContractAbi,
				functionName: 'approve',
				args: [
					protocolContractAddress,
					BigInt(100000000000000000000000000000000000000),
				],
			}),
		},
		{
			to: protocolContractAddress,
			data: encodeFunctionData({
				abi: protocolContractAbi,
				functionName: 'oraclePriceCollateral',
				args: [loanId, BigInt(collateralPercentage)],
			}),
		},
	]

	return address ? (
		<Transaction
			chainId={DEFAULT_CHAIN.id}
			calls={calls}
			onStatus={handleOnStatus}
		>
			<TransactionButton
				className='bg-custom-primary hover:bg-custom-accent'
				disabled={disabled}
			/>
			<TransactionSponsor />
			<TransactionStatus>
				<TransactionStatusLabel />
				<TransactionStatusAction />
			</TransactionStatus>
		</Transaction>
	) : (
		<Wallet>
			<ConnectWallet>
				<Avatar className='h-6 w-6' />
				<Name />
			</ConnectWallet>
		</Wallet>
	)
}
