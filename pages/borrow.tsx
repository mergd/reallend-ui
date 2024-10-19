import Page from '@/components/page'
import Section from '@/components/section'
import BorrowerCreateLoanTransaction from '@/components/transactions/BorrowerCreateLoan'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cottageContractAddress } from '@/lib/contracts/Cottage'
import { usdcContractAddress } from '@/lib/contracts/USDC'
import { CarIcon, CheckCircle2Icon, HouseIcon, ScrollIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Address } from 'viem'

enum BorrowMoneyStep {
	SelectAsset,
	SelectCollateral,
	SetLoanDetails,
	Success,
}

enum AssetType {
	HOUSE = 'house',
	CAR = 'car',
	OTHER = 'other',
}
export default function BorrowMoney() {
	const [step, setStep] = useState(BorrowMoneyStep.SelectAsset)
	const [selectedAsset, setSelectedAsset] = useState<AssetType | null>(null)
	const [selectedCollateral, setSelectedCollateral] = useState<string | null>(
		null,
	)
	const [borrowAmount, setBorrowAmount] = useState<number | null>(null)
	const [interestRate, setInterestRate] = useState<number | null>(null)
	const [loanExpiration, setLoanExpiration] = useState<Date | null>(null)

	const [borrowAsset] = useState<Address>(usdcContractAddress)
	const [collateralAsset] = useState<Address>(cottageContractAddress)
	const [collateralId] = useState<number>(Math.floor(Math.random() * 1e17))

	const assetOptions = [
		{
			type: AssetType.HOUSE,
			icon: HouseIcon,
			label: 'House',
			image:
				'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&h=300&fit=crop',
		},
		{
			type: AssetType.CAR,
			icon: CarIcon,
			label: 'Car',
			image:
				'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=300&fit=crop',
		},
		{
			type: AssetType.OTHER,
			icon: ScrollIcon,
			label: 'Other',
			image:
				'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500&h=300&fit=crop',
		},
	]

	const collateralOptions = [
		{
			label: 'Beach House',
			image:
				'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&h=300&fit=crop',
		},
		{
			label: 'Ski Chalet',
			image:
				'https://images.unsplash.com/photo-1520984032042-162d526883e0?w=500&h=300&fit=crop',
		},
		{
			label: 'Boat House',
			image:
				'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop',
		},
	]

	const renderStepContent = () => {
		switch (step) {
			case BorrowMoneyStep.SelectAsset:
				return (
					<>
						<h2 className='text-xl font-semibold mb-4'>Select Asset Type</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
							{assetOptions.map(({ type, icon: Icon, label, image }) => (
								<div
									key={type}
									className={`relative rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${
										selectedAsset === type
											? 'ring-4 ring-custom-primary'
											: 'hover:shadow-lg'
									}`}
									onClick={() => setSelectedAsset(type)}
								>
									<Image
										src={image}
										alt={label}
										width={500}
										height={300}
										className='w-full h-48 object-cover'
									/>
									<div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
										<Icon className='w-12 h-12 text-white' />
									</div>
									<div className='absolute bottom-0 left-0 right-0 bg-custom-accent bg-opacity-75 p-2'>
										<p className='text-center font-semibold'>{label}</p>
									</div>
								</div>
							))}
						</div>
					</>
				)

			case BorrowMoneyStep.SelectCollateral:
				return (
					<>
						<h2 className='text-xl font-semibold mb-4'>Select Collateral</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
							{collateralOptions.map(({ label, image }) => (
								<div
									key={label}
									className={`relative rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${
										selectedCollateral === label
											? 'ring-2 ring-custom-primary'
											: 'hover:shadow-lg'
									}`}
									onClick={() => setSelectedCollateral(label)}
								>
									<Image
										src={image}
										alt={label}
										width={500}
										height={300}
										className='w-full h-48 object-cover'
									/>
									<div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2'>
										<p className='text-center font-semibold'>{label}</p>
									</div>
								</div>
							))}
						</div>
					</>
				)

			case BorrowMoneyStep.SetLoanDetails:
				return (
					<>
						<h2 className='text-xl font-semibold mb-4'>Loan Details</h2>
						<div className='space-y-4'>
							<div>
								<Label htmlFor='borrow-amount'>Borrow Amount (USDC)</Label>
								<Input
									type='number'
									id='borrow-amount'
									placeholder='100000'
									onChange={(e) => setBorrowAmount(Number(e.target.value))}
								/>
							</div>
							<div>
								<Label htmlFor='interest-rate'>Interest Rate (%)</Label>
								<Input
									type='number'
									id='interest-rate'
									placeholder='5'
									onChange={(e) => setInterestRate(Number(e.target.value))}
								/>
							</div>
							<div>
								<Label htmlFor='loan-expiration'>Loan Expiration</Label>
								<Input
									type='date'
									id='loan-expiration'
									onChange={(e) => setLoanExpiration(new Date(e.target.value))}
								/>
							</div>
							<BorrowerCreateLoanTransaction
								borrowAsset={borrowAsset}
								collateralAsset={collateralAsset}
								collateralId={BigInt(collateralId)}
								borrowAmount={BigInt(borrowAmount ?? 0)}
								interestRate={BigInt(interestRate ?? 0)}
								expiration={Math.round(
									Math.max(
										(loanExpiration?.getTime() ?? Date.now()) / 1000,
										Date.now() / 1000,
									),
								)}
								onSuccess={() => setStep(BorrowMoneyStep.Success)}
							/>
						</div>
					</>
				)

			case BorrowMoneyStep.Success:
				return (
					<div className='text-center'>
						<CheckCircle2Icon className='w-16 h-16 text-green-600 mx-auto mb-4' />
						<h2 className='text-2xl font-semibold mb-4'>Success!</h2>
						<p className='mb-4'>
							You have created the <strong>69th</strong> loan on Real Lend!
						</p>
						<p className='mb-6'>
							After the oracle prices your loan and a lender deposits USDC, you
							can withdraw your USDC in the portfolio page.
						</p>
						<Button onClick={() => setStep(BorrowMoneyStep.SelectAsset)}>
							Return to Home
						</Button>
					</div>
				)
		}
	}

	return (
		<Page>
			<Section>
				{renderStepContent()}
				{step < BorrowMoneyStep.SetLoanDetails && (
					<Button
						className='mt-6'
						disabled={!selectedAsset && !selectedCollateral}
						onClick={() => setStep((prevStep) => prevStep + 1)}
					>
						Continue
					</Button>
				)}
			</Section>
		</Page>
	)
}
