# How to set up your Google Maps API key :smile:

## First things first...

You need a [Google Cloud account](https://developers.google.com/) with **billing**, which means you need to input your credit card. It's basically free unless you make more than 5000 requests in a month (not sure about this number, but I know $200 worth of requests is free).

After you get your api key, copy and replace ``123456`` with your key in the file ``.env`` which is located in the **root** folder. I have added it to the git ignore file after pushing it the first time so you shouldn't need to worry about sharing this private key for now. (Hopefully I set that up correctly.)

 **DISCLAIMER**: I know this is not safe, but we will definitely fix it before deployment.

If it doesn't work, look at what the console error says. Google's error codes have very clear instructions on how to fix them.