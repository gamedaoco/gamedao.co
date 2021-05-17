docker-run:
	docker run \
	-p 9944:9944 \
	-p 9933:9933 \
	-p 30333:30333 \
	playzero/subzero:1.16.0 \
	/usr/local/bin/subzero \
	--dev --name hello-joy \
	--ws-external \
	--rpc-external \
	--rpc-cors all \
	--rpc-methods unsafe