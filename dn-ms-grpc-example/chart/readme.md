# Helm install

## command
```
helm install [name] [chart] [flags]
```

```
helm install  grpc-b  ../dn-ms-grpc-template/ -f ./chart/values.yaml
helm upgrade  grpc-b  ../dn-ms-grpc-template/ -f ./chart/values.yaml --recreate-pods
```
