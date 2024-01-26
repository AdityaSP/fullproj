import json

import json
import boto3
import os
client = boto3.client('sns')

def main(event, context):
    print("I'm running!")
    response = client.publish(TopicArn=os.environ.get('TOPIC_ARN'),Message=" from lambda cdk")
    print("Message published")
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
    