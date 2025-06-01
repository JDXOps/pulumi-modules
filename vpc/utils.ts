import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const env = pulumi.getStack().split(".")[1]

module.exports = {
    config,
    env
}