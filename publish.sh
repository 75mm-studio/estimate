#!/bin/sh
aws s3 cp ./estimate.html s3://75mm.studio --acl public-read --profile 75mm.studio
aws s3 cp ./js/estimate.js s3://75mm.studio/js/ --acl public-read --profile 75mm.studio
aws s3 cp ./css/estimate.css s3://75mm.studio/css/ --acl public-read --profile 75mm.studio
