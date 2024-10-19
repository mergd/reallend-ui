import Page from '@/components/page'
import Section from '@/components/section'
import { useAccount, useReadContract } from 'wagmi'
import { readContract } from '@wagmi/core'
import {
	protocolContractAddress,
	protocolContractAbi,
} from '@/lib/contracts/Protocol'
import { useState, useEffect } from 'react'
import { getConfig } from '@/lib/wagmi'
import { Loan } from '@/components/ui/Loan'
import { LoanType } from '@/lib/types'

const Index = () => {
	const { address } = useAccount()
	const [myBorrows, setMyBorrows] = useState<LoanType[]>([])

	useEffect(() => {
		const myBorrows = async () => {
			if (!address) return
			const borrows = await readContract(getConfig(), {
				address: protocolContractAddress,
				abi: protocolContractAbi,
				functionName: 'allLoans',
			})
			setMyBorrows(borrows as any[])
		}
		myBorrows()
	}, [address])

	return (
		<Page>
			<Section>
				<div className='container mx-auto px-4 py-8'>
					<h2 className='text-2xl font-bold text-custom-primary mb-6'>
						All Loans
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{myBorrows.map((loan, index) => (
							<Loan key={index} loan={loan} />
						))}
					</div>
				</div>
			</Section>
		</Page>
	)
}

export default Index
