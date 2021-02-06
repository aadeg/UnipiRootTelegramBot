#!/bin/bash

curl -v -X POST -F "url=${URL}" https://api.telegram.org/bot${BOT_TOKEN}/setWebhook