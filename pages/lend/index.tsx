import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'

export default function HowLendingWorks() {
	return (
		<Page>
			<Section>
				<div className='bg-white shadow-lg rounded-lg overflow-hidden'>
					<Image
						src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80'
						alt='Lending concept'
						width={1200}
						height={400}
						className='w-full h-64 object-cover'
					/>
					<div className='p-6'>
						<h1 className='text-2xl font-bold text-custom-primary mb-6'>
							How Lending Works
						</h1>

						<div className='space-y-6'>
							<section>
								<h2 className='text-lg font-semibold text-custom-primary mb-2'>
									1. Loan Listing
								</h2>
								<p className='text-gray-700'>
									Borrowers list their real world assets as collateral,
									specifying loan terms such as amount, duration, and interest
									rate.
								</p>
							</section>

							<section>
								<h2 className='text-lg font-semibold text-custom-primary mb-2'>
									2. Collateral Pricing
								</h2>
								<p className='text-gray-700'>
									Our oracle service evaluates and prices the collateral to
									ensure fair lending terms for both parties.
								</p>
							</section>

							<section>
								<h2 className='text-lg font-semibold text-custom-primary mb-2'>
									3. Lender Selection
								</h2>
								<p className='text-gray-700'>
									Lenders browse available loans and choose ones that match
									their risk tolerance and investment goals.
								</p>
							</section>

							<section>
								<h2 className='text-lg font-semibold text-custom-primary mb-2'>
									4. Loan Funding
								</h2>
								<p className='text-gray-700'>
									Once a lender selects a loan, they provide the funds, which
									are then made available to the borrower.
								</p>
							</section>

							<section>
								<h2 className='text-lg font-semibold text-custom-primary mb-2'>
									5. Repayment
								</h2>
								<p className='text-gray-700'>
									Borrowers repay the loan with interest according to the
									agreed-upon terms. Lenders receive their principal plus
									interest upon successful repayment.
								</p>
							</section>

							<section>
								<h2 className='text-lg font-semibold text-custom-primary mb-2'>
									6. Default Protection
								</h2>
								<p className='text-gray-700'>
									In case of default, the collateral can be liquidated to
									protect the lender&apos;s investment. However, all lending
									carries risk, and lenders should be aware they can lose up to
									100% of their capital.
								</p>
							</section>
						</div>
					</div>
				</div>
			</Section>
		</Page>
	)
}
