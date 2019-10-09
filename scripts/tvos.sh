#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Start tvOS for osTV"
    echo "Reload with CMD + R"
    sleep 3
    react-native run-ios  --simulator "Apple TV" --scheme "tvOS-tvOS"
else
    echo "Sorry, this is not an Mac, so we cannot simulate Apple devices... :("  
fi
