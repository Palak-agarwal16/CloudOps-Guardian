from fastapi import FastAPI
from app.aws_monitor import get_ec2_instances

app = FastAPI(title="CloudOps Guardian")


@app.get("/")
def home():
    return {
        "message": "CloudOps Guardian is running!"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "CloudOps Guardian"
    }


@app.get("/aws/ec2")
def get_ec2():
    return {
        "instances": get_ec2_instances()
    }