import { Address } from 'viem'

export const cottageContractAddress: Address =
	'0xd7D1BB032C96bD2B071C6712fbb1d97b6dD4c557'
export const cottageContractAbi = [
	{ type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
	{
		type: 'function',
		name: '_tokenURI',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
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
		name: 'getApproved',
		inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'address', internalType: 'address' }],
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
		name: 'mint',
		inputs: [
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'id', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
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
		name: 'setTokenURI',
		inputs: [
			{ name: 'id', type: 'uint256', internalType: 'uint256' },
			{ name: 'uri', type: 'string', internalType: 'string' },
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
		stateMutability: 'view',
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
