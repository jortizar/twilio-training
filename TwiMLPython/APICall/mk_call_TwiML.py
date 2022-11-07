import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']


client = Client(account_sid, auth_token)

call = client.calls.create(
                        twiml='<?xml version="1.0" encoding="UTF-8"?><Response><Dial><Conference endConferenceOnExit="true" startConferenceOnEnter="true">moderated-conference-room</Conference></Dial></Response>',
                        to='+50685381972',
                        from_='+13254425727'
                    )
print(call.__dict__)
