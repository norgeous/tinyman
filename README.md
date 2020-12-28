# sysinfo

---

React dashboard app with bash backend for pi (and IOT)

---

### Install

Install `tinyman` frontend and backend, `sysinfo` and `pi-model` with:

```sh
bash <(curl -s https://raw.githubusercontent.com/norgeous/tinyman/master/bin/install_debian.sh)
```

---

### Usage

##### tinyman

```sh
systemctl status tinyman-frontend
systemctl status tinyman-backend
```

##### pi-model

```sh
pi-model
```

ex output: `4B 1.2`

##### sysinfo

```sh
sysinfo -h
watch -n .5 sysinfo -e
curl localhost:9009
```
