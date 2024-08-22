"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65776],{11316:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var o=s(24246),t=s(71670),i=s(92975),a=s.n(i);const l={title:"Podman Desktop 1.3 Release",description:"Podman Desktop 1.3 has been released!",slug:"podman-desktop-release-1.3",authors:["dgolovin"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.3.webp"},r=void 0,d={permalink:"/blog/podman-desktop-release-1.3",source:"@site/blog/2023-08-16-release-1.3.md",title:"Podman Desktop 1.3 Release",description:"Podman Desktop 1.3 has been released!",date:"2023-08-16T00:00:00.000Z",tags:[{inline:!0,label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{inline:!0,label:"release",permalink:"/blog/tags/release"},{inline:!0,label:"kubernetes",permalink:"/blog/tags/kubernetes"},{inline:!0,label:"openshift",permalink:"/blog/tags/openshift"}],readingTime:5.22,hasTruncateMarker:!1,authors:[{name:"Denis Golovin",title:"Principal Software Engineer",url:"https://github.com/cdrage",imageURL:"https://github.com/dgolovin.png",key:"dgolovin",page:null}],frontMatter:{title:"Podman Desktop 1.3 Release",description:"Podman Desktop 1.3 has been released!",slug:"podman-desktop-release-1.3",authors:["dgolovin"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.3.webp"},unlisted:!1,prevItem:{title:"Podman Desktop 1.4 Release",permalink:"/blog/podman-desktop-release-1.4"},nextItem:{title:"Podman Desktop 1.2 Release",permalink:"/blog/podman-desktop-release-1.2"}},c={authorsImageUrls:[void 0]},p=[{value:"Release Details",id:"release-details",level:2},{value:"Compose group Logs tab #3176",id:"compose-group-logs-tab-3176",level:3},{value:"Podman user-mode networking support to Windows/WSL #3251",id:"podman-user-mode-networking-support-to-windowswsl-3251",level:3},{value:"Compose group Summary tab #3317",id:"compose-group-summary-tab-3317",level:3},{value:"Compose group Inspect tab #3316",id:"compose-group-inspect-tab-3316",level:3},{value:"<code>Deploy to kubernetes</code> in compose actions #3299",id:"deploy-to-kubernetes-in-compose-actions-3299",level:3},{value:"<code>Generate Kube</code> in Compose actions and <code>Kube</code> tab in compose details #3253",id:"generate-kube-in-compose-actions-and-kube-tab-in-compose-details-3253",level:3},{value:"Install multiple extensions using extension pack #3150",id:"install-multiple-extensions-using-extension-pack-3150",level:3},{value:"Customize icons from extension #3131",id:"customize-icons-from-extension-3131",level:3},{value:"Resource details page update #1923",id:"resource-details-page-update-1923",level:3},{value:"<code>Node&#39;s container image</code> field added to <code>Create a Kind cluster</code> form #3508",id:"nodes-container-image-field-added-to-create-a-kind-cluster-form-3508",level:3},{value:"Support Docker Desktop extensions using a backend #3435",id:"support-docker-desktop-extensions-using-a-backend-3435",level:3},{value:"Initial onboarding implementation for podman (experimental) #3308",id:"initial-onboarding-implementation-for-podman-experimental-3308",level:3},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:3},{value:"Community Thank You",id:"community-thank-you",level:3},{value:"Final Notes",id:"final-notes",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Podman Desktop 1.3 Release! \ud83c\udf89"}),"\n",(0,o.jsx)(n.p,{children:"This is essentially a bug-fix release to fix various issues in UI, extension engine and featured extensions, but as usual we also added a few new features."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Podman 4.6.1"}),": Podman 4.6.1 included in Windows and Mac installers"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Podman user-mode networking support to Windows/WSL"}),": A new switch `User mode networking' is available when creating Podman machine on Windows for Podman 4.6.0+ to configure podman to work in certain VPN setups and other specialized networking configurations"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Compose group new UI elements"}),": You can now see summary, inspect, deploy to kubernetes, generate kube yaml and view logs"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Extension packs and extension dependencies"}),": Install group of extensions in one click"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Resource details page update"}),": See summary and log for resource"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Create Kind cluster form update"}),": A new ",(0,o.jsx)(n.code,{children:"Node's container image"})," field can be used to specify the Kubernetes version used for the control-planed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Support Docker Desktop extensions using a backend"}),": When loading Docker Desktop extension the containers are created in the backend as described in the vm section of extension's descriptor"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Podman Initial Onboarding (preview)"}),": Install and configure podman using included installer"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop 1.3 is now available. ",(0,o.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Podman-desktop-1-3-bug-swatting",src:s(46714).Z+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,o.jsxs)(n.h3,{id:"compose-group-logs-tab-3176",children:["Compose group Logs tab ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3176",children:"#3176"})]}),"\n",(0,o.jsx)(n.p,{children:"When clicking on the group of containers, you can now view the logs of the entire group of compose containers and don't need to open\nlog for every component individually."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/6422176/743a4ffc-e291-4697-8ac5-8052cc921946",alt:"Screenshot 2023-07-11 at 12 48 47 PM"})}),"\n",(0,o.jsxs)(n.h3,{id:"podman-user-mode-networking-support-to-windowswsl-3251",children:["Podman user-mode networking support to Windows/WSL ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3251",children:"#3251"})]}),"\n",(0,o.jsx)(n.p,{children:"Certain VPN setups or other specialized networking configs will block traffic from the virtual WSL networking device, resulting in the podman WSL backend from being unable to contact systems on the VPN, and potentially losing internet access altogether. The new switch allows you to create a podman VM machine configured to work correctly in mentioned above networking environments."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/620330/2f521576-b6a6-42b5-b24d-08df5b432608",alt:"user"})}),"\n",(0,o.jsxs)(n.h3,{id:"compose-group-summary-tab-3317",children:["Compose group Summary tab ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3317",children:"#3317"})]}),"\n",(0,o.jsx)(n.p,{children:"Compose group Summary tab shows all containers in the group and let you navigate to Details page for specific container."}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://github.com/containers/podman-desktop/assets/620330/6dd6dacd-a0d8-478d-b11e-2b414108bd20",width:"100%",height:"100%"}),"\n",(0,o.jsxs)(n.h3,{id:"compose-group-inspect-tab-3316",children:["Compose group Inspect tab ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3316",children:"#3316"})]}),"\n",(0,o.jsx)(n.p,{children:'Compose group Inspect tab shows an array of "container inspect" from docker / podman.'}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/255658081-4a2ce4ce-bdc7-435d-9114-1071ab1ec3c5.mov",width:"100%",height:"100%"}),"\n",(0,o.jsxs)(n.h3,{id:"deploy-to-kubernetes-in-compose-actions-3299",children:[(0,o.jsx)(n.code,{children:"Deploy to kubernetes"})," in compose actions ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3295",children:"#3299"})]}),"\n",(0,o.jsx)(n.p,{children:"A button to deploy to kubernetes added to Compose group."}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/254973806-1ce57225-3422-4d36-8d09-b70a2825869f.mov",width:"100%",height:"100%"}),"\n",(0,o.jsxs)(n.h3,{id:"generate-kube-in-compose-actions-and-kube-tab-in-compose-details-3253",children:[(0,o.jsx)(n.code,{children:"Generate Kube"})," in Compose actions and ",(0,o.jsx)(n.code,{children:"Kube"})," tab in compose details ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3253",children:"#3253"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Generate Kube"}),' item added to Compose actions and "Kube" tab is now available in Compose details view.']}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/254337805-98268722-4dde-4c0e-afdf-4873fa4f43fe.mov",width:"100%",height:"100%"}),"\n",(0,o.jsxs)(n.h3,{id:"install-multiple-extensions-using-extension-pack-3150",children:["Install multiple extensions using extension pack ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3150",children:"#3150"})]}),"\n",(0,o.jsx)(n.p,{children:"An Extension pack introduced in Extension engine is a way to declare set of extensions to install them all at once."}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/251741571-0cd4a199-06f4-4890-8414-4e93ca9178bc.mp4",width:"100%",height:"100%"}),"\n",(0,o.jsxs)(n.h3,{id:"customize-icons-from-extension-3131",children:["Customize icons from extension ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3131",children:"#3131"})]}),"\n",(0,o.jsxs)(n.p,{children:["Extensions now can customize icons for list elements using ",(0,o.jsx)(n.code,{children:"when"})," clause."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/49404737/7aae5347-4f07-4854-ba11-1f629b5ccf22",alt:"image"})}),"\n",(0,o.jsxs)(n.h3,{id:"resource-details-page-update-1923",children:["Resource details page update ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1923",children:"#1923"})]}),"\n",(0,o.jsx)(n.p,{children:"If you click on the arrow icon next to a resource name it will open up a details page (similarly to how clicking on a container in the container list opens up a details page)."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/49404737/229542404-bae44f89-5cd3-4baf-8b08-e934e4462697.gif",alt:"image"})}),"\n",(0,o.jsxs)(n.h3,{id:"nodes-container-image-field-added-to-create-a-kind-cluster-form-3508",children:[(0,o.jsx)(n.code,{children:"Node's container image"})," field added to ",(0,o.jsx)(n.code,{children:"Create a Kind cluster"})," form ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3508",children:"#3508"})]}),"\n",(0,o.jsxs)(n.p,{children:["The new ",(0,o.jsx)(n.code,{children:"Node's container image"})," field can be used to specify the Kubernetes version used for the control-planed."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/42176370/b2a63faf-629f-436d-8496-7c0cd8158679",alt:"image"})}),"\n",(0,o.jsxs)(n.h3,{id:"support-docker-desktop-extensions-using-a-backend-3435",children:["Support Docker Desktop extensions using a backend ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3435",children:"#3435"})]}),"\n",(0,o.jsx)(n.p,{children:"Podman Desktop now loads the containers in the backend as described in the vm section of extension descriptor the same way as Docker Desktop does."}),"\n",(0,o.jsxs)(n.h3,{id:"initial-onboarding-implementation-for-podman-experimental-3308",children:["Initial onboarding implementation for podman (experimental) ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3308",children:"#3308"})]}),"\n",(0,o.jsx)(n.p,{children:"This is the initial implementation for the onboarding feature. It only covers a simple onboarding for podman. Check system requirements -> install podman -> yay! Done!"}),"\n",(0,o.jsx)(n.h3,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Updating videos to be adaptive for mobile by @mairin ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3229",children:"#3229"})]}),"\n",(0,o.jsxs)(n.li,{children:["Consistent max width and padding in settings by @deboer-tim ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3232",children:"#3232"})]}),"\n",(0,o.jsxs)(n.li,{children:["Settings navigation bar resizing by @deboer-tim in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3231",children:"#3231"})]}),"\n",(0,o.jsxs)(n.li,{children:["Move new registry button to header by @deboer-tim ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3245",children:"#3245"})]}),"\n",(0,o.jsxs)(n.li,{children:["Bigger lima logo by @afbjorklund ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3248",children:"#3248"})]}),"\n",(0,o.jsxs)(n.li,{children:["Horizontal docker logo by @afbjorklund ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3236",children:"#3236"})]}),"\n",(0,o.jsxs)(n.li,{children:["Respect LIMA_HOME environment variable by @afbjorklund ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3254",children:"#3254"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add check before writing to terminal by @lstocchi ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3263",children:"#3263"})]}),"\n",(0,o.jsxs)(n.li,{children:["Wait until remote side has fully initialized the extensions by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3257",children:"#3257"})]}),"\n",(0,o.jsxs)(n.li,{children:["Fix loader not centered horizontally by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3270",children:"#3270"})]}),"\n",(0,o.jsxs)(n.li,{children:["Troubleshooting still waiting after failure by @deboer-tim ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3354",children:"#3354"})]}),"\n",(0,o.jsxs)(n.li,{children:["Store error for build by @cdrage ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3365",children:"#3365"})]}),"\n",(0,o.jsxs)(n.li,{children:["Missing checkbox tooltips by @deboer-tim ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3380",children:"#3380"})]}),"\n",(0,o.jsxs)(n.li,{children:["Load compose logs async not await by @cdrage ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3377",children:"#3377"})]}),"\n",(0,o.jsxs)(n.li,{children:["Set rootful connection when starting rootful machine by @lstocchi ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3364",children:"#3364"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default last page by @deboer-tim ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3388",children:"#3388"})]}),"\n",(0,o.jsxs)(n.li,{children:["Avoid dashboard displaying providers starting while they don't by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3451",children:"#3451"})]}),"\n",(0,o.jsxs)(n.li,{children:["Do not use extensionInfo until it is defined by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3450",children:"#V"})]}),"\n",(0,o.jsxs)(n.li,{children:["Allow BASIC authentication (all caps) by @cdrage ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3471",children:"#3471"})]}),"\n",(0,o.jsxs)(n.li,{children:["Allow single domain registry such as localhost:5000 by @cdrage ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3468",children:"#3468"})]}),"\n",(0,o.jsxs)(n.li,{children:["Create /usr/local/bin directory if it does not exist on binary install by @cdrage ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3425",children:"#3425"})]}),"\n",(0,o.jsxs)(n.li,{children:["Only delete selected pods by @deboer-tim ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3378",children:"#"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add back 'Done' text on the button by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3487",children:"#3487"})]}),"\n",(0,o.jsxs)(n.li,{children:["Do not wait for more than 5s when checking for podman ping by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3497",children:"#3497"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add proxy support for extension using patching get and request approach by @dgolovin ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2825",children:"#2825"})]}),"\n",(0,o.jsxs)(n.li,{children:["Refresh component when field is updated by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3525",children:"#3525"})]}),"\n",(0,o.jsxs)(n.li,{children:["Higher-res icons for featured extensions list by @mairin ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3511",children:"#3511"})]}),"\n",(0,o.jsxs)(n.li,{children:["Main nav selection by @deboer-tim ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3510",children:"#3510"})]}),"\n",(0,o.jsxs)(n.li,{children:["kube event error when switching context by @jeffmaury ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3494",children:"#3494"})]}),"\n",(0,o.jsxs)(n.li,{children:["Reset error message each time we pull image by @benoitf ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3550",children:"#3550"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better."}),"\n",(0,o.jsxs)(n.p,{children:["A warm welcome to ",(0,o.jsx)(n.a,{href:"https://github.com/rostalan",children:"@rostalan"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/axel7083",children:"@axel7083"})," who made their first contribution to the project in this release."]}),"\n",(0,o.jsx)(n.h3,{id:"final-notes",children:"Final Notes"}),"\n",(0,o.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.3.0",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Get the latest release from the ",(0,o.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},46714:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/title-bug-swatting-8a5058958e05e545e61c1e5e689335d3.png"}}]);