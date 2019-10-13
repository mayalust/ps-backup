# Copyright Proudsmart.com. 2015-2016
#
# Author: Jia Zhao
#

BUILD_TOP_DIR=$(shell pwd)
RELEASE_DIR=${BUILD_TOP_DIR}/release

BUILD_NUM=$(shell date '+%y%m%d-%H%M%S')

pre: 
	@echo "====================================================="
	@echo "Pre-checking ..."
	@echo "====================================================="
	which npm > /dev/null 2>&1
	if [ "$$?" != "0" ]; then \
		echo "Failed, no npm command found! Please install nodejs..."; \
		exit -1;\
	fi
    
clean:
	@echo "====================================================="
	@echo "Clean Build Environment ..."
	@echo "====================================================="
	-rm -rf ${RELEASE_DIR}
    
init: clean
	@echo "====================================================="
	@echo "Init Build Environment ..."
	@echo "====================================================="
	cd ${BUILD_TOP_DIR};
	#npm install --registry=https://registry.npm.taobao.org
	npm install
	npm install -g gulp@latest --unsafe-perm
	npm install -g smart-angular@latest --unsafe-perm
	smart-angular pack core/output
	smart-angular pack baogang

daily: pre init
	gulp daily
	mkdir -p ${RELEASE_DIR}/ps-core/build
	mkdir -p ${RELEASE_DIR}/ps-baogang/build
	cp -rf ${BUILD_TOP_DIR}/ps-core/build ${RELEASE_DIR}/ps-core
	cp -rf ${BUILD_TOP_DIR}/ps-baogang/build ${RELEASE_DIR}/ps-baogang
	#cp -rf ${BUILD_TOP_DIR}/node_modules ${BUILD_TOP_DIR}/bower_components ${RELEASE_DIR}
	@echo "====================================================="
	@echo "Build Daily Package Successfully !"
	@echo "====================================================="

release: pre init 
	gulp release
	mkdir -p ${RELEASE_DIR}/ps-core/build
	mkdir -p ${RELEASE_DIR}/ps-baogang/build
	cp -rf ${BUILD_TOP_DIR}/ps-core/build ${RELEASE_DIR}/ps-core
	cp -rf ${BUILD_TOP_DIR}/ps-baogang/build ${RELEASE_DIR}/ps-baogang
	cd ${BUILD_TOP_DIR}/ps-baogang
	ls
	#cp -rf ${BUILD_TOP_DIR}/node_modules ${BUILD_TOP_DIR}/bower_components ${RELEASE_DIR}
	@echo "====================================================="
	@echo "Build Relase Package Successfully !"
	@echo "====================================================="
    
help:
	@echo "====================================================="
	@echo "Usage: "
	@echo "make clean           Clean all build"
	@echo "make init            Init Build Environment"
	@echo "make daily           Build daily package without js compress"
	@echo "make release         Build release package"
	@echo "====================================================="
	
    
