import React from 'react'

const Loader = () => (
	<div className="loader">
		<style jsx>{`
			.loader {
				background-color: #ffffff;

				border: 8px solid #ff00ff;
				border-top: 8px solid #00ffcc;
				border-radius: 50%;
				width: 40px;
				height: 40px;
				animation: spin 2s linear infinite;
				margin-left: auto;
				margin-right: auto;
				margin-top: 40px;
			}
			@keyframes spin {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		`}</style>
	</div>
)

export default Loader
