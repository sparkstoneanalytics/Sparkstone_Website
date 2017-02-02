#!/bin/bash
# Used for deployment to an aws s3 bucket. 

# Dependencies:
#   awscli. Install using `pip install awscli`.
#   aws credentials. Store under ~/.aws/credentials.

aws s3 sync . s3://sparkstoneanalytics.com --exclude ".git*" --exclude ".DS_Store" --exclude "deploy.sh" --delete
