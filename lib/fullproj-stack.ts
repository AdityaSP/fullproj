import { Trylib } from 'adityaconstructlib';
import * as cdk from 'aws-cdk-lib';
import { EventType } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
const fs = require('fs');
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FullprojStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Trylib(this, 'TryS3build',{})
    const mys3 = new cdk.aws_s3.Bucket(this, 'S3fortrial', {
      bucketName: "s3fortrial",
      removalPolicy: cdk.RemovalPolicy.DESTROY
    } )

    // const topic = new cdk.aws_sns.Topic(this, 'Topic', {
    //   displayName: 'createdtopic',
    // });

    // const sub = topic.addSubscription(new cdk.aws_sns_subscriptions.EmailSubscription('sp.aditya@gmail.com'));

    // const lambdaFn = new cdk.aws_lambda.Function(this, 'Singleton', {
    //   // code: new cdk.aws_lambda.InlineCode(fs.readFileSync('lambda-handler.py', { encoding: 'utf-8' })),
    //   code: cdk.aws_lambda.Code.fromAsset('./lambda'),

    //   handler: 'index.main',
    //   timeout: cdk.Duration.seconds(300),
    //   runtime: cdk.aws_lambda.Runtime.PYTHON_3_9,
    //   environment: {'TOPIC_ARN': topic.topicArn}
      
    // });

    //     // Add the permission to the lambda function to publish to SNS
    //     const snsTopicPolicy = new cdk.aws_iam.PolicyStatement({
    //       actions: ['sns:publish'],
    //       resources: ['*'],
    //     });
    
    //     // Add the permission to the lambda function to publish to SNS
    //     lambdaFn.addToRolePolicy(snsTopicPolicy);

    //   mys3.addEventNotification(EventType.OBJECT_CREATED, new cdk.aws_s3_notifications.LambdaDestination(lambdaFn))
    
        
  }
}
