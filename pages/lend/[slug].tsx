import Page from '@/components/page'
import LenderFillLoanTransaction from '@/components/transactions/LenderFillLoan'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	protocolContractAddress,
	protocolContractAbi,
} from '@/lib/contracts/Protocol'
import { LoanType } from '@/lib/types'
import { CheckCircle2Icon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { createConfig, http, useAccount } from 'wagmi'
import { readContract } from '@wagmi/core'
import Image from 'next/image'
import { DEFAULT_CHAIN } from '@/lib/constants'

enum BorrowMoneyStep {
	ConfirmDetails,
	Success,
}

export default function Lend() {
	const router = useRouter()
	const { address } = useAccount()
	const [step, setStep] = useState(BorrowMoneyStep.ConfirmDetails)
	const [acknowledgedRisks, setAcknowledgedRisks] = useState(false)
	const loanId = router.query.slug
	const [loan, setLoan] = useState<LoanType | null>(null)

	useEffect(() => {
		const fetchLoan = async () => {
			if (!loanId) return
			const loan = await readContract(
				createConfig({
					chains: [DEFAULT_CHAIN],
					transports: {
						[DEFAULT_CHAIN.id]: http(),
					},
				}),
				{
					address: protocolContractAddress,
					abi: protocolContractAbi,
					functionName: 'loans',
					args: [BigInt(loanId as string)],
				},
			)
			setLoan({
				loanId: loan[0],
				oracle: loan[1],
				borrower: loan[2],
				borrowAsset: loan[3],
				lender: loan[4],
				collateralAsset: loan[5],
				collateralAssetId: loan[6],
				collateralPercentage: loan[7],
				borrowAmount: loan[8],
				interestRate: loan[9],
				startTimestamp: loan[10],
				expiration: loan[11],
				borrowerHasRepaid: loan[12],
				isActive: loan[13],
			})
		}
		fetchLoan()
	}, [loanId])

	return (
		<Page>
			<div className='max-w-2xl mx-auto px-4 py-8'>
				{step === BorrowMoneyStep.ConfirmDetails && (
					<div className='bg-white shadow-lg rounded-lg overflow-hidden'>
						<Image
							src={`https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80&ixid=${loanId}`}
							alt='Beach house'
							width={800}
							height={400}
							className='w-full h-64 object-cover'
						/>
						<div className='p-6'>
							<h2 className='text-2xl font-semibold text-custom-primary mb-4'>
								Confirm Loan Details
							</h2>
							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<p className='text-gray-600'>You Lend</p>
									<p className='font-semibold'>
										${Number(loan?.borrowAmount).toLocaleString('en-US')}
									</p>
								</div>
								<div className='flex items-center justify-between'>
									<p className='text-gray-600'>Collateral Posted</p>
									<p className='font-semibold'>
										$
										{(
											(Number(loan?.collateralPercentage) / 100) *
											Number(loan?.borrowAmount)
										).toLocaleString('en-US')}
									</p>
								</div>
								<div className='flex items-center justify-between'>
									<p className='text-gray-600'>Duration</p>
									<p className='font-semibold'>
										{new Date(
											Number(loan?.expiration) * 1000,
										).toLocaleDateString()}
									</p>
								</div>
								<div className='flex items-center justify-between'>
									<p className='text-gray-600'>Interest Rate</p>
									<p className='font-semibold'>
										{Number(loan?.interestRate).toLocaleString('en-US')}%
									</p>
								</div>
							</div>
							<div className='mt-6'>
								<div className='flex items-center gap-2 mb-4'>
									<Input
										type='checkbox'
										id='acknowledged-risks'
										onChange={(e) => setAcknowledgedRisks(e.target.checked)}
										className='w-4 h-4 text-custom-primary border-gray-300 rounded focus:ring-custom-primary'
									/>
									<Label
										htmlFor='acknowledged-risks'
										className='flex-1 text-sm text-gray-700'
									>
										I can lose up to 100% of my capital if the borrower defaults
										on the loan
									</Label>
								</div>
								{loanId && (
									<LenderFillLoanTransaction
										loanId={BigInt(loanId as string)}
										borrowAmount={
											loan?.borrowAmount ? BigInt(loan.borrowAmount) : BigInt(0)
										}
										disabled={!acknowledgedRisks}
										onSuccess={() => setStep(BorrowMoneyStep.Success)}
									/>
								)}
							</div>
						</div>
					</div>
				)}
				{step === BorrowMoneyStep.Success && (
					<div className='bg-white shadow-lg rounded-lg p-6 text-center'>
						<div className='flex items-center justify-center gap-2 mb-4'>
							<CheckCircle2Icon className='w-10 h-10 text-custom-primary' />
							<h2 className='text-2xl font-semibold text-custom-primary'>
								Success!
							</h2>
						</div>
						<p className='mb-4'>
							You have filled the <strong>{loanId}</strong> loan on real lend!
						</p>
						<p className='mb-6'>
							After the loan ends, you can withdraw your USDC from the portfolio
							page
						</p>
						<Button
							className='bg-custom-primary text-white hover:bg-custom-accent hover:text-custom-primary transition-colors duration-300'
							onClick={() => {
								setStep(BorrowMoneyStep.ConfirmDetails)
								router.push('/')
							}}
						>
							Return to Home
						</Button>
					</div>
				)}
			</div>
		</Page>
	)
}
