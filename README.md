# Timer

> Simple timer utility to start, stop, check duration, and clear a timer. Works in Node, JS/UMD modules, or the browser.

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/timer">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/timer.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/timer">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/timer.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/timer/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/timer">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/00bfb3941ca34aa9b286ffbac6466c09/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/timer?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/timer/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

## Install

```sh
npm install @brikcss/timer --save-dev
```

## Usage

**`timer.start(id)`**

Start a new or existing timer. Creates one if it doesn't exist. Returns the newly created timer object.

**`timer.stop(id)`**

Stop an existing timer. Returns the timer's duration as a string.

**`timer.duration(id)`**

Get the duration of a timer. Returns a string in `ms` or `s`.

**`timer.clear(id)`**

Clear / remove a timer from memory.

## Environment support

| Node   | CLI   | UMD   | ES Module | Browser   |
|:------:|:-----:|:-----:|:---------:|:---------:|
| ✔      | x     | ✔    | ✔         | ✔        |
