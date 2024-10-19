import { Address } from 'viem'

export const protocolContractAddress: Address =
	'0xa6a1967bfaDc1E457403310548282F96F6eA5116'
export const protocolContractAbi = [
	{ type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
	{
		type: 'function',
		name: 'INTEREST_PRECISION',
		inputs: [],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'activeDutchAuctions',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'tuple[]',
				internalType: 'struct Protocol.DutchAuction[]',
				components: [
					{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
					{ name: 'seller', type: 'address', internalType: 'address' },
					{
						name: 'startingPrice',
						type: 'uint256',
						internalType: 'uint256',
					},
					{ name: 'startAt', type: 'uint256', internalType: 'uint256' },
					{
						name: 'expiresAt',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'discountRate',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'protocol',
						type: 'address',
						internalType: 'address',
					},
					{
						name: 'borrowAsset',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'isActive', type: 'bool', internalType: 'bool' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'allLoans',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'tuple[]',
				internalType: 'struct Protocol.Loan[]',
				components: [
					{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
					{ name: 'oracle', type: 'address', internalType: 'address' },
					{
						name: 'borrower',
						type: 'address',
						internalType: 'address',
					},
					{
						name: 'borrowAsset',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'lender', type: 'address', internalType: 'address' },
					{
						name: 'collateralAsset',
						type: 'address',
						internalType: 'contract ERC721',
					},
					{
						name: 'collateralAssetId',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'collateralPercentage',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowAmount',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'interestRate',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'startTimestamp',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'expiration',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowerHasRepaid',
						type: 'bool',
						internalType: 'bool',
					},
					{ name: 'isActive', type: 'bool', internalType: 'bool' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'approve',
		inputs: [
			{ name: 'spender', type: 'address', internalType: 'address' },
			{ name: 'id', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'balanceOf',
		inputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'borrowerClaimFinishedLoan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'borrowerCreateLoan',
		inputs: [
			{
				name: 'borrowAsset',
				type: 'address',
				internalType: 'contract ERC20',
			},
			{
				name: 'collateralAsset',
				type: 'address',
				internalType: 'contract ERC721',
			},
			{
				name: 'collateralAssetId',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: 'borrowAmount',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: 'interestRate',
				type: 'uint256',
				internalType: 'uint256',
			},
			{ name: 'expiration', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [
			{
				name: '',
				type: 'tuple',
				internalType: 'struct Protocol.Loan',
				components: [
					{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
					{ name: 'oracle', type: 'address', internalType: 'address' },
					{
						name: 'borrower',
						type: 'address',
						internalType: 'address',
					},
					{
						name: 'borrowAsset',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'lender', type: 'address', internalType: 'address' },
					{
						name: 'collateralAsset',
						type: 'address',
						internalType: 'contract ERC721',
					},
					{
						name: 'collateralAssetId',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'collateralPercentage',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowAmount',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'interestRate',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'startTimestamp',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'expiration',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowerHasRepaid',
						type: 'bool',
						internalType: 'bool',
					},
					{ name: 'isActive', type: 'bool', internalType: 'bool' },
				],
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'borrowerEndLoan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'borrowerRepayLoan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'borrowerWithdrawLoan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'buy',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'calculateCollateralAmount',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'calculatePrincipalWithInterestAmount',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'dutchAuctions',
		inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		outputs: [
			{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
			{ name: 'seller', type: 'address', internalType: 'address' },
			{
				name: 'startingPrice',
				type: 'uint256',
				internalType: 'uint256',
			},
			{ name: 'startAt', type: 'uint256', internalType: 'uint256' },
			{ name: 'expiresAt', type: 'uint256', internalType: 'uint256' },
			{
				name: 'discountRate',
				type: 'uint256',
				internalType: 'uint256',
			},
			{ name: 'protocol', type: 'address', internalType: 'address' },
			{
				name: 'borrowAsset',
				type: 'address',
				internalType: 'contract ERC20',
			},
			{ name: 'isActive', type: 'bool', internalType: 'bool' },
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'getApproved',
		inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'address', internalType: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'getPrice',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'isApprovedForAll',
		inputs: [
			{ name: '', type: 'address', internalType: 'address' },
			{ name: '', type: 'address', internalType: 'address' },
		],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'lenderClaimFinishedLoan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'lenderEndLoan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'lenderFillLoan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'loan',
		inputs: [{ name: 'loanId', type: 'uint256', internalType: 'uint256' }],
		outputs: [
			{
				name: '',
				type: 'tuple',
				internalType: 'struct Protocol.Loan',
				components: [
					{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
					{ name: 'oracle', type: 'address', internalType: 'address' },
					{
						name: 'borrower',
						type: 'address',
						internalType: 'address',
					},
					{
						name: 'borrowAsset',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'lender', type: 'address', internalType: 'address' },
					{
						name: 'collateralAsset',
						type: 'address',
						internalType: 'contract ERC721',
					},
					{
						name: 'collateralAssetId',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'collateralPercentage',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowAmount',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'interestRate',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'startTimestamp',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'expiration',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowerHasRepaid',
						type: 'bool',
						internalType: 'bool',
					},
					{ name: 'isActive', type: 'bool', internalType: 'bool' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'loans',
		inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		outputs: [
			{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
			{ name: 'oracle', type: 'address', internalType: 'address' },
			{ name: 'borrower', type: 'address', internalType: 'address' },
			{
				name: 'borrowAsset',
				type: 'address',
				internalType: 'contract ERC20',
			},
			{ name: 'lender', type: 'address', internalType: 'address' },
			{
				name: 'collateralAsset',
				type: 'address',
				internalType: 'contract ERC721',
			},
			{
				name: 'collateralAssetId',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: 'collateralPercentage',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: 'borrowAmount',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: 'interestRate',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: 'startTimestamp',
				type: 'uint256',
				internalType: 'uint256',
			},
			{ name: 'expiration', type: 'uint256', internalType: 'uint256' },
			{ name: 'borrowerHasRepaid', type: 'bool', internalType: 'bool' },
			{ name: 'isActive', type: 'bool', internalType: 'bool' },
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'myBorrows',
		inputs: [{ name: 'user', type: 'address', internalType: 'address' }],
		outputs: [
			{
				name: '',
				type: 'tuple[]',
				internalType: 'struct Protocol.Loan[]',
				components: [
					{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
					{ name: 'oracle', type: 'address', internalType: 'address' },
					{
						name: 'borrower',
						type: 'address',
						internalType: 'address',
					},
					{
						name: 'borrowAsset',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'lender', type: 'address', internalType: 'address' },
					{
						name: 'collateralAsset',
						type: 'address',
						internalType: 'contract ERC721',
					},
					{
						name: 'collateralAssetId',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'collateralPercentage',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowAmount',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'interestRate',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'startTimestamp',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'expiration',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowerHasRepaid',
						type: 'bool',
						internalType: 'bool',
					},
					{ name: 'isActive', type: 'bool', internalType: 'bool' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'myLends',
		inputs: [{ name: 'user', type: 'address', internalType: 'address' }],
		outputs: [
			{
				name: '',
				type: 'tuple[]',
				internalType: 'struct Protocol.Loan[]',
				components: [
					{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
					{ name: 'oracle', type: 'address', internalType: 'address' },
					{
						name: 'borrower',
						type: 'address',
						internalType: 'address',
					},
					{
						name: 'borrowAsset',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'lender', type: 'address', internalType: 'address' },
					{
						name: 'collateralAsset',
						type: 'address',
						internalType: 'contract ERC721',
					},
					{
						name: 'collateralAssetId',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'collateralPercentage',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowAmount',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'interestRate',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'startTimestamp',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'expiration',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowerHasRepaid',
						type: 'bool',
						internalType: 'bool',
					},
					{ name: 'isActive', type: 'bool', internalType: 'bool' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'myPrices',
		inputs: [{ name: 'user', type: 'address', internalType: 'address' }],
		outputs: [
			{
				name: '',
				type: 'tuple[]',
				internalType: 'struct Protocol.Loan[]',
				components: [
					{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
					{ name: 'oracle', type: 'address', internalType: 'address' },
					{
						name: 'borrower',
						type: 'address',
						internalType: 'address',
					},
					{
						name: 'borrowAsset',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'lender', type: 'address', internalType: 'address' },
					{
						name: 'collateralAsset',
						type: 'address',
						internalType: 'contract ERC721',
					},
					{
						name: 'collateralAssetId',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'collateralPercentage',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowAmount',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'interestRate',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'startTimestamp',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'expiration',
						type: 'uint256',
						internalType: 'uint256',
					},
					{
						name: 'borrowerHasRepaid',
						type: 'bool',
						internalType: 'bool',
					},
					{ name: 'isActive', type: 'bool', internalType: 'bool' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'name',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'numLoans',
		inputs: [],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'oraclePriceCollateral',
		inputs: [
			{ name: 'loanId', type: 'uint256', internalType: 'uint256' },
			{
				name: 'collateralPercentage',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'ownerOf',
		inputs: [{ name: 'id', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'safeTransferFrom',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'id', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'safeTransferFrom',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'id', type: 'uint256', internalType: 'uint256' },
			{ name: 'data', type: 'bytes', internalType: 'bytes' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'setApprovalForAll',
		inputs: [
			{ name: 'operator', type: 'address', internalType: 'address' },
			{ name: 'approved', type: 'bool', internalType: 'bool' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'supportsInterface',
		inputs: [{ name: 'interfaceId', type: 'bytes4', internalType: 'bytes4' }],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'symbol',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'tokenURI',
		inputs: [{ name: 'id', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'pure',
	},
	{
		type: 'function',
		name: 'transferFrom',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'id', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'event',
		name: 'Approval',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'spender',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'id',
				type: 'uint256',
				indexed: true,
				internalType: 'uint256',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'ApprovalForAll',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'operator',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'approved',
				type: 'bool',
				indexed: false,
				internalType: 'bool',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'Transfer',
		inputs: [
			{
				name: 'from',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'id',
				type: 'uint256',
				indexed: true,
				internalType: 'uint256',
			},
		],
		anonymous: false,
	},
] as const
