# !/bin/sh

S3_BUCKET_NAME=numble-spa-challenge

# Build the application
yarn build

# Copy the build folder to the server
aws s3 sync ../dist s3://$S3_BUCKET_NAME --delete