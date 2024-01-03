import { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts,css}'],
	theme: {
		theme: {},
		extend: {
			screens: {
				xs: '475px'
			},
			fontSize: {
				// Tiny
				'tiny-light': [
					'10px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				tiny: [
					'10px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '500'
					}
				],
				'tiny-bold': [
					'10px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				// Mini
				'mini-light': [
					'12px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				mini: [
					'12px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '500'
					}
				],
				'mini-bold': [
					'12px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				// Small
				'small-light': [
					'13.5px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				small: [
					'13.5px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '500'
					}
				],
				'small-bold': [
					'13.5px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				// Base
				'base-light': [
					'15px',
					{
						lineHeight: '140%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				base: [
					'15px',
					{
						lineHeight: '140%',
						letterSpacing: '0px',
						fontWeight: '500'
					}
				],
				'base-bold': [
					'15px',
					{
						lineHeight: '140%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				// Medium
				'medium-light': [
					'18px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				medium: [
					'18px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '500'
					}
				],
				'medium-bold': [
					'18px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				// Large
				'large-light': [
					'22px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				large: [
					'22px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '500'
					}
				],
				'large-bold': [
					'22px',
					{
						lineHeight: '130%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				// Extra
				'extra-light': [
					'28px',
					{
						lineHeight: '140%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				extra: [
					'28px',
					{
						lineHeight: '140%',
						letterSpacing: '0px',
						fontWeight: '500'
					}
				],
				'extra-bold': [
					'28px',
					{
						lineHeight: '140%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				]
			},
			colors: {
				'clusters-background-color': 'var(--background-color)',
				'clusters-background-shade': 'var(--background-shade)',
				'clusters-background-dark-shade': 'var(--background-dark-shade)',
				'clusters-background-dark-shade-opacity-20': 'var(--background-dark-shade-opacity-20)',
				'clusters-text-key': 'var(--text-key)',
				'clusters-text-bright-dim': 'var(--text-bright-dim)',
				'clusters-text-dim': 'var(--text-dim)',
				'clusters-border-dim': 'var(--border-dim)',
				'clusters-border-shade': 'var(--border-shade)',
				'clusters-border-shade-opacity-40': 'var(--border-shade-opacity-40)',
				'clusters-destructive': 'var(--destructive)',
				'clusters-card-bg': 'var(--card-bg)',
				'clusters-grid-empty': 'var(--grid-empty)',
				'clusters-yellow': 'var(--yellow)',
				'clusters-red': 'var(--red)',
				'clusters-green': 'var(--green)'
			},
      borderRadius: {
        
      }
		},
	},
	plugins: []
};

export default config;
