"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80922],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),i=n(86010),l=n(72389),o=n(67392),s=n(7094),c=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,h=e.defaultValue,m=e.values,k=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,K=(0,r.useState)(b),R=K[0],E=K[1],I=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=w[k];null!=T&&T!==R&&v.some((function(e){return e.value===T}))&&E(T)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==R&&(x(t),E(a),null!=k&&C(k,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var i,l=I.indexOf(e.currentTarget)-1;n=null!=(i=I[l])?i:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return I.push(e)},onKeyDown:O,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function h(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},27670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(65488),o=n(85162),s=["components"],c={title:"3. Install Kubernetes (Skip for Docker Installs)",weight:300},u=void 0,p={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",title:"3. Install Kubernetes (Skip for Docker Installs)",description:"Skip this section if you are installing Rancher on a single node with Docker.",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"3. Install Kubernetes (Skip for Docker Installs)",weight:300},sidebar:"tutorialSidebar",previous:{title:"2. Collect and Publish Images to your Private Registry",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},next:{title:"4. Install Rancher",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"}},d={},h=[{value:"Installation Outline",id:"installation-outline",level:3},{value:"1. Prepare Images Directory",id:"1-prepare-images-directory",level:3},{value:"2. Create Registry YAML",id:"2-create-registry-yaml",level:3},{value:"3. Install K3s",id:"3-install-k3s",level:3},{value:"4. Save and Start Using the kubeconfig File",id:"4-save-and-start-using-the-kubeconfig-file",level:3},{value:"Note on Upgrading",id:"note-on-upgrading",level:3},{value:"Installation Outline",id:"installation-outline-1",level:3},{value:"1. Create RKE2 configuration",id:"1-create-rke2-configuration",level:3},{value:"2. Create Registry YAML",id:"2-create-registry-yaml-1",level:3},{value:"3. Install RKE2",id:"3-install-rke2",level:3},{value:"4. Save and Start Using the kubeconfig File",id:"4-save-and-start-using-the-kubeconfig-file-1",level:3},{value:"Note on Upgrading",id:"note-on-upgrading-1",level:3},{value:"1. Install RKE",id:"1-install-rke",level:3},{value:"2. Create an RKE Config File",id:"2-create-an-rke-config-file",level:3},{value:"3. Run RKE",id:"3-run-rke",level:3},{value:"4. Save Your Files",id:"4-save-your-files",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],m={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Skip this section if you are installing Rancher on a single node with Docker."))),(0,i.kt)("p",null,"This section describes how to install a Kubernetes cluster according to our ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/rancher-manager-architecture/architecture-recommendations#environment-for-kubernetes-installations"},"best practices for the Rancher server environment.")," This cluster should be dedicated to run only the Rancher server."),(0,i.kt)("p",null,"Rancher can be installed on any Kubernetes cluster, including hosted Kubernetes providers."),(0,i.kt)("p",null,"The steps to set up an air-gapped Kubernetes cluster on RKE, RKE2, or K3s are shown below."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"K3s",mdxType:"TabItem"},(0,i.kt)("p",null,"In this guide, we are assuming you have created your nodes in your air gapped environment and have a secure Docker private registry on your bastion server."),(0,i.kt)("h3",{id:"installation-outline"},"Installation Outline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-prepare-images-directory"},"Prepare Images Directory")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-create-registry-yaml"},"Create Registry YAML")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-install-k3s"},"Install K3s")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#4-save-and-start-using-the-kubeconfig-file"},"Save and Start Using the kubeconfig File"))),(0,i.kt)("h3",{id:"1-prepare-images-directory"},"1. Prepare Images Directory"),(0,i.kt)("p",null,"Obtain the images tar file for your architecture from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page for the version of K3s you will be running."),(0,i.kt)("p",null,"Place the tar file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"images")," directory before starting K3s on each node, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n")),(0,i.kt)("h3",{id:"2-create-registry-yaml"},"2. Create Registry YAML"),(0,i.kt)("p",null,"Create the registries.yaml file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml"),". This will tell K3s the necessary details to connect to your private registry."),(0,i.kt)("p",null,"The registries.yaml file should look like this before plugging in the necessary information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'---\nmirrors:\n  customreg:\n    endpoint:\n      - "https://ip-to-server:5000"\nconfigs:\n  customreg:\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: <path to the cert file used in the registry>\n      key_file:  <path to the key file used in the registry>\n      ca_file: <path to the ca file used in the registry>\n')),(0,i.kt)("p",null,"Note, at this time only secure registries are supported with K3s (SSL with custom CA)."),(0,i.kt)("p",null,"For more information on private registries configuration file for K3s, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"K3s documentation.")),(0,i.kt)("h3",{id:"3-install-k3s"},"3. Install K3s"),(0,i.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,i.kt)("p",null,"To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,i.kt)("p",null,"Obtain the K3s binary from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page, matching the same version used to get the airgap images tar.\nAlso obtain the K3s install script at ",(0,i.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"https://get.k3s.io")),(0,i.kt)("p",null,"Place the binary in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," on each node.\nPlace the install script anywhere on each node, and name it ",(0,i.kt)("inlineCode",{parentName:"p"},"install.sh"),"."),(0,i.kt)("p",null,"Install K3s on each server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n")),(0,i.kt)("p",null,"Install K3s on each agent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken ./install.sh\n")),(0,i.kt)("p",null,"Note, take care to ensure you replace ",(0,i.kt)("inlineCode",{parentName:"p"},"myserver")," with the IP or valid DNS of the server and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"mynodetoken")," with the node-token from the server.\nThe node-token is on the server at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/node-token")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"K3s additionally provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"--resolv-conf")," flag for kubelets, which may help with configuring DNS in air-gapped networks."))),(0,i.kt)("h3",{id:"4-save-and-start-using-the-kubeconfig-file"},"4. Save and Start Using the kubeconfig File"),(0,i.kt)("p",null,"When you installed K3s on each Rancher server node, a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file was created on the node at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml"),". This file contains credentials for full access to the cluster, and you should save this file in a secure location."),(0,i.kt)("p",null,"To use this ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl,")," a Kubernetes command-line tool."),(0,i.kt)("li",{parentName:"ol"},"Copy the file at ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," and save it to the directory ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," on your local machine."),(0,i.kt)("li",{parentName:"ol"},"In the kubeconfig file, the ",(0,i.kt)("inlineCode",{parentName:"li"},"server")," directive is defined as localhost. Configure the server as the DNS of your load balancer, referring to port 6443. (The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443.) Here is an example ",(0,i.kt)("inlineCode",{parentName:"li"},"k3s.yaml"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # Edit this line\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," You can now use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage your K3s cluster. If you have more than one kubeconfig file, you can specify which one you want to use by passing in the path to the file when using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/k3s.yaml get pods --all-namespaces\n")),(0,i.kt)("p",null,"For more information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/cluster-access/"},"K3s documentation")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"official Kubernetes documentation")," about organizing cluster access using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," files."),(0,i.kt)("h3",{id:"note-on-upgrading"},"Note on Upgrading"),(0,i.kt)("p",null,"Upgrading an air-gap environment can be accomplished in the following manner:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the new air-gap images (tar file) from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page for the version of K3s you will be upgrading to. Place the tar in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/images/")," directory on each node. Delete the old tar file."),(0,i.kt)("li",{parentName:"ol"},"Copy and replace the old K3s binary in ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each node. Copy over the install script at ",(0,i.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"https://get.k3s.io")," (as it is possible it has changed since the last release). Run the script again just as you had done in the past with the same environment variables."),(0,i.kt)("li",{parentName:"ol"},"Restart the K3s service (if not restarted automatically by installer)."))),(0,i.kt)(o.Z,{value:"RKE2",mdxType:"TabItem"},(0,i.kt)("p",null,"In this guide, we are assuming you have created your nodes in your air-gapped environment and have a secure Docker private registry on your bastion server."),(0,i.kt)("h3",{id:"installation-outline-1"},"Installation Outline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-create-rke2-configuration"},"Create RKE2 configuration")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-create-registry-yaml"},"Create Registry YAML")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-install-rke2"},"Install RKE2")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#4-save-and-start-using-the-kubeconfig-file"},"Save and Start Using the kubeconfig File"))),(0,i.kt)("h3",{id:"1-create-rke2-configuration"},"1. Create RKE2 configuration"),(0,i.kt)("p",null,"Create the config.yaml file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml"),". This will contain all the configuration options necessary to create a highly available RKE2 cluster."),(0,i.kt)("p",null,"On the first server the minimum config is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"token: my-shared-secret\ntls-san:\n  - loadbalancer-dns-domain.com\n")),(0,i.kt)("p",null,"On each other server the config file should contain the same token and tell RKE2 to connect to the existing first server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"server: https://ip-of-first-server:9345\ntoken: my-shared-secret\ntls-san:\n  - loadbalancer-dns-domain.com\n")),(0,i.kt)("p",null,"For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/ha/"},"RKE2 documentation"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RKE2 additionally provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"resolv-conf")," option for kubelets, which may help with configuring DNS in air-gap networks."))),(0,i.kt)("h3",{id:"2-create-registry-yaml-1"},"2. Create Registry YAML"),(0,i.kt)("p",null,"Create the registries.yaml file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml"),". This will tell RKE2 the necessary details to connect to your private registry."),(0,i.kt)("p",null,"The registries.yaml file should look like this before plugging in the necessary information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'---\nmirrors:\n  customreg:\n    endpoint:\n      - "https://ip-to-server:5000"\nconfigs:\n  customreg:\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: <path to the cert file used in the registry>\n      key_file:  <path to the key file used in the registry>\n      ca_file: <path to the ca file used in the registry>\n')),(0,i.kt)("p",null,"For more information on private registries configuration file for RKE2, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/containerd_registry_configuration/"},"RKE2 documentation.")),(0,i.kt)("h3",{id:"3-install-rke2"},"3. Install RKE2"),(0,i.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,i.kt)("p",null,"Download the install script, rke2, rke2-images, and sha256sum archives from the release and upload them into a directory on each server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir /tmp/rke2-artifacts && cd /tmp/rke2-artifacts/\nwget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2-images.linux-amd64.tar.zst\nwget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2.linux-amd64.tar.gz\nwget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/sha256sum-amd64.txt\ncurl -sfL https://get.rke2.io --output install.sh\n")),(0,i.kt)("p",null,"Next, run install.sh using the directory on each server, as in the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INSTALL_RKE2_ARTIFACT_PATH=/tmp/rke2-artifacts sh install.sh\n")),(0,i.kt)("p",null,"Then enable and start the service on all servers:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl enable rke2-server.service\nsystemctl start rke2-server.service")),(0,i.kt)("p",null,"For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/airgap/"},"RKE2 documentation"),"."),(0,i.kt)("h3",{id:"4-save-and-start-using-the-kubeconfig-file-1"},"4. Save and Start Using the kubeconfig File"),(0,i.kt)("p",null,"When you installed RKE2 on each Rancher server node, a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file was created on the node at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml"),". This file contains credentials for full access to the cluster, and you should save this file in a secure location."),(0,i.kt)("p",null,"To use this ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl"),", a Kubernetes command-line tool."),(0,i.kt)("li",{parentName:"ol"},"Copy the file at ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/rancher/rke2/rke2.yaml")," and save it to the directory ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," on your local machine."),(0,i.kt)("li",{parentName:"ol"},"In the kubeconfig file, the ",(0,i.kt)("inlineCode",{parentName:"li"},"server")," directive is defined as localhost. Configure the server as the DNS of your load balancer, referring to port 6443. (The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443.) Here is an example ",(0,i.kt)("inlineCode",{parentName:"li"},"rke2.yaml"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # Edit this line\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," You can now use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage your RKE2 cluster. If you have more than one kubeconfig file, you can specify which one you want to use by passing in the path to the file when using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/rke2.yaml get pods --all-namespaces\n")),(0,i.kt)("p",null,"For more information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/cluster_access/"},"RKE2 documentation")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"official Kubernetes documentation")," about organizing cluster access using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," files."),(0,i.kt)("h3",{id:"note-on-upgrading-1"},"Note on Upgrading"),(0,i.kt)("p",null,"Upgrading an air-gap environment can be accomplished in the following manner:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the new air-gap artifacts and install script from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2/releases"},"releases")," page for the version of RKE2 you will be upgrading to."),(0,i.kt)("li",{parentName:"ol"},"Run the script again just as you had done in the past with the same environment variables."),(0,i.kt)("li",{parentName:"ol"},"Restart the RKE2 service."))),(0,i.kt)(o.Z,{value:"RKE",mdxType:"TabItem"},"We will create a Kubernetes cluster using Rancher Kubernetes Engine (RKE). Before being able to start your Kubernetes cluster, you\u2019ll need to install RKE and create a RKE config file.",(0,i.kt)("h3",{id:"1-install-rke"},"1. Install RKE"),(0,i.kt)("p",null,"Install RKE by following the instructions in the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE documentation.")),(0,i.kt)("h3",{id:"2-create-an-rke-config-file"},"2. Create an RKE Config File"),(0,i.kt)("p",null,"From a system that can access ports 22/TCP and 6443/TCP on the Linux host node(s) that you set up in a previous step, use the sample below to create a new file named ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"."),(0,i.kt)("p",null,"This file is an RKE configuration file, which is a configuration for the cluster you're deploying Rancher to."),(0,i.kt)("p",null,"Replace values in the code sample below with help of the ",(0,i.kt)("em",{parentName:"p"},"RKE Options")," table. Use the IP address or DNS names of the three nodes you created."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For more details on the options available, see the RKE ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"Config Options"),"."))),(0,i.kt)("figcaption",null,"RKE Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"The DNS or IP address for the node within the air gapped network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"A user that can run Docker commands.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"role")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"List of Kubernetes roles assigned to the node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,i.kt)("td",{parentName:"tr",align:null},"optional",(0,i.kt)("sup",null,"1")),(0,i.kt)("td",{parentName:"tr",align:null},"The DNS or IP address used for internal cluster traffic.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the SSH private key used to authenticate to the node (defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),").")))),(0,i.kt)("blockquote",null,(0,i.kt)("sup",null,"1")," Some services like AWS EC2 require setting the `internal_address` if you want to use self-referencing security groups or firewalls."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - address: 10.10.3.187 # node air gap network IP\n    internal_address: 172.31.7.22 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.254 # node air gap network IP\n    internal_address: 172.31.13.132 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.89 # node air gap network IP\n    internal_address: 172.31.3.216 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n\nprivate_registries:\n  - url: <REGISTRY.YOURDOMAIN.COM:PORT> # private registry url\n    user: rancher\n    password: '*********'\n    is_default: true\n")),(0,i.kt)("h3",{id:"3-run-rke"},"3. Run RKE"),(0,i.kt)("p",null,"After configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", bring up your Kubernetes cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,i.kt)("h3",{id:"4-save-your-files"},"4. Save Your Files"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The files mentioned below are needed to maintain, troubleshoot, and upgrade your cluster."))),(0,i.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains the current state of the cluster including the RKE configuration and the certificates.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"li"},"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.'))),(0,i.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," page."),(0,i.kt)("h3",{id:"next-install-rancher"},(0,i.kt)("a",{parentName:"h3",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Next: Install Rancher")))}k.isMDXComponent=!0}}]);