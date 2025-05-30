import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# `get`

## `/api/v0/get`

Download IPFS objects.

### Request

<Tabs>
  <TabItem value="Syntax" label="Syntax" default>

```bash
curl "https://ipfs.infura.io:5001/api/v0/get?arg=<ipfs-path>&output=<value>&archive=false&compress=false&compression-level=-1" \
  -X POST \
  -u "<YOUR-API-KEY>:<YOUR-API-KEY-SECRET>"
```

  </TabItem>
  <TabItem value="Example" label="Example" >

```bash
curl "https://ipfs.infura.io:5001/api/v0/get?arg=QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy&archive=true" \
  -X POST \
  -u "<YOUR-API-KEY>:<YOUR-API-KEY-SECRET>"
```

  </TabItem>
</Tabs>

#### Request parameters

- `arg` _\[Required]_ - The IPFS object hash.
- `output` _\[Optional]_ - The path where the output should be stored.
- `archive` _\[Optional]_ - Output a TAR archive. The default is `false`.
- `compress` _\[Optional]_ - Compress the output with GZIP compression. The default is `false`.
- `compression-level` _\[Optional]_ - The level of compression (1-9). The default is `-1`.

### Response

On success, the call to this endpoint will return with 200 and the following body:

```
This endpoint returns a `text/plain` response body.
```
