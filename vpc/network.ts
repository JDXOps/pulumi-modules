import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";


// Define Interface called VPC Args that's to be used in Vpc Component Resource 

interface VpcArgs {
    cidrBlock: string
}


export class Vpc extends pulumi.ComponentResource {

    public readonly vpc: aws.ec2.Vpc
    
    constructor(name: string, args: VpcArgs, opts?: pulumi.ComponentResourceOptions) {
        super("jdxops:network:vpc", name , {}, opts)

        this.vpc = new aws.ec2.Vpc(name,{cidrBlock: args.cidrBlock}, {parent: this });

        this.registerOutputs({ vpcId: this.vpc.id})
    }  
}