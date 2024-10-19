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
import { Address, encodeFunctionData, zeroAddress } from 'viem'
import {
	cottageContractAbi,
	cottageContractAddress,
} from '@/lib/contracts/Cottage'
import { DEFAULT_CHAIN } from '@/lib/constants'

export default function 	BorrowerCreateLoanTransaction({
	borrowAsset,
	collateralAsset,
	collateralId,
	borrowAmount,
	interestRate,
	expiration,
	onSuccess,
}: {
	borrowAsset: Address
	collateralAsset: Address
	collateralId: bigint
	borrowAmount: bigint
	interestRate: bigint
	expiration: number
	onSuccess: () => void
}) {
	const { address } = useAccount()

	const handleOnStatus = useCallback((status: LifecycleStatus) => {
		if (status.statusName === 'success') {
			onSuccess()
		}
	}, [])

	const calls = [
		{
			to: cottageContractAddress,
			data: encodeFunctionData({
				abi: cottageContractAbi,
				functionName: 'mint',
				args: [address!, collateralId],
			}),
		},
		{
			to: cottageContractAddress,
			data: encodeFunctionData({
				abi: cottageContractAbi,
				functionName: 'approve',
				args: [protocolContractAddress, collateralId],
			}),
		},
		{
			to: protocolContractAddress,
			data: encodeFunctionData({
				abi: protocolContractAbi,
				functionName: 'borrowerCreateLoan',
				args: [
					borrowAsset,
					collateralAsset,
					collateralId,
					borrowAmount,
					interestRate,
					BigInt(expiration),
				],
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
				disabled={
					!borrowAmount ||
					!interestRate ||
					!expiration ||
					!borrowAsset ||
					!collateralAsset ||
					!collateralId
				}
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
