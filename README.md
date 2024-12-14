# Expo Constants.deviceId AsyncStorage Issue

This repository demonstrates a bug where Expo's `Constants.deviceId` might be null or undefined when accessed within an AsyncStorage function. This leads to unexpected behavior or crashes.

The problem is that `Constants.deviceId` may not be immediately available when the app starts, and AsyncStorage operations might attempt to access it before it's fully initialized.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run the app using Expo Go or a similar tool.
4. Observe the intermittent crashes or unexpected behavior related to the storage of deviceId.

## Solution

The solution involves ensuring that `Constants.deviceId` is available before using it within the AsyncStorage function.  This can be achieved using an async function and `await` to make sure `Constants.deviceId` is properly retrieved before storage.