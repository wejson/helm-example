# Commands

```
helm install [name] [template] [values] [flags]
```

the flag to recreate pods is deprecated but works for now
```
helm upgrade [name] [template] [values] [flags] --recreate-pods
```

## to install the example

open terminal from repo root

install ambassador
```
helm install ambassador ./ambassador-chart/
```

build the grpc-node docker in the mkube env
```
eval $(minikube docker-env)
docker build -t grpc-node ./dn-ms-grpc-example/.
```

install the deployment
```
helm install grpc-node ./dn-ms-grpc-template/ -f ./dn-ms-grpc-example/chart/values.yaml 
```

upgrade deployment

```
helm upgrade grpc-node ./dn-ms-grpc-template/ -f ./dn-ms-grpc-example/chart/values.yaml
```
upgrade and recreate pods

```
helm upgrade grpc-node ./dn-ms-grpc-template/ -f ./dn-ms-grpc-example/chart/values.yaml --recreate-pods
```


## Run

expose the service in mkube (this maybe will not be needed later but loadbalnacer 80 port doesn't map correctly)
```
minikube service ingress-ambassador 
```

cd to http-to-grpc and run it localy
```
npm i
npm start
```

send post request to localhost:3000/add
```
{
    "data": [1,2,3],
    "target": "127.0.0.1:<ambassador ingress port here>"
}
```
