"use strict";(self.webpackChunkfake_twitter=self.webpackChunkfake_twitter||[]).push([[933],{3933:(S,h,r)=>{r.r(h),r.d(h,{NetworkModule:()=>O});var d=r(6814),p=r(2787),t=r(5879),f=r(4104),w=r(1374),g=r(553),k=r(9862);let v=(()=>{class o{constructor(e){this.http=e}getFollowers(e=1,i=30){return this.http.get(g.N.ApiBaseUrl+`/followers?page=${e}&size=${i}`,{})}getFollowings(e=1,i=30){return this.http.get(g.N.ApiBaseUrl+`/following?page=${e}&size=${i}`,{})}unFollow(e){return this.http.post(g.N.ApiBaseUrl+"/unfollow",{user_id:e})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(k.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=r(3814),x=r(2296),a=r(5195),_=r(6385),c=r(2741);function N(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"mat-card")(2,"mat-card-header")(3,"div",3)(4,"h1",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5)(7,"p",6),t._uU(8),t.qZA(),t.TgZ(9,"p",7)(10,"span",8),t._uU(11,"Joined"),t.qZA(),t._uU(12),t.ALo(13,"date"),t.qZA()()()(),t.TgZ(14,"mat-card-content"),t._UZ(15,"mat-divider"),t.TgZ(16,"p",9),t._uU(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),t.qZA()(),t.TgZ(18,"mat-card-actions",10)(19,"button",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.viewUser(s))}),t._uU(20,"View"),t.qZA()()()()}if(2&o){const e=n.$implicit;t.xp6(5),t.Oqu(e.username),t.xp6(3),t.hij("@placeholder_tag_",e.id,""),t.xp6(4),t.hij(" : ",t.lcZ(13,3,e.join_date)," ")}}let C=(()=>{class o{constructor(e,i){this.networkService=e,this.router=i,this.followers=[],this.currentUsers=0,this.pageNumber=1,this.theEnd=!1}scrollhandler(e){this.theEnd||e===this.followers.length-1&&(this.pageNumber+=1,this.getFollowers(this.pageNumber,30))}getFollowers(e,i){this.networkService.getFollowers(e,i).pipe((0,w.P)()).subscribe(l=>{0!==l.count?(this.followers=[...this.followers,...l.followers],this.currentUsers+=l.count):this.theEnd=!0})}viewUser(e){localStorage.setItem("current_visited_user",JSON.stringify(e)),this.router.navigate([`home/user/${e.id}`])}ngOnInit(){this.getFollowers(this.pageNumber,30)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-network-followers"]],decls:2,vars:2,consts:[[1,"virtualizer-viewport",3,"itemSize","scrolledIndexChange"],["class","explore-items",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"explore-items"],[1,"full-width"],[1,"m-b-0","text-bold","text-capitalize"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayout.lt-sm","column","fxLayoutAlign.lt-sm","start start",1,"full-width","m-b-16"],[1,"m-b-0","font-size-16","opacity-80"],[1,"m-b-0"],[1,"text-bold"],[1,"m-t-16"],["fxLayoutAlign","end center"],["mat-button","","color","accent",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"cdk-virtual-scroll-viewport",0),t.NdJ("scrolledIndexChange",function(s){return i.scrollhandler(s)}),t.YNc(1,N,21,5,"div",1),t.qZA()),2&e&&(t.Q6J("itemSize",30),t.xp6(1),t.Q6J("cdkVirtualForOf",i.followers))},dependencies:[m.xw,m.Wh,x.lW,a.a8,a.hq,a.dn,a.dk,_.d,c.xd,c.x0,c.N7,d.uU],styles:["[_nghost-%COMP%]   .virtualizer-viewport[_ngcontent-%COMP%]{height:94vh}[_nghost-%COMP%]   .explore-items[_ngcontent-%COMP%]{margin:20px}"]}),o})();var F=r(5940);function Z(o,n){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"mat-spinner"),t.qZA())}function b(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"mat-card")(2,"mat-card-header")(3,"div",6)(4,"h1",7),t._uU(5),t.qZA(),t.TgZ(6,"div",8)(7,"p",9),t._uU(8),t.qZA(),t.TgZ(9,"p",10)(10,"span",11),t._uU(11,"Joined"),t.qZA(),t._uU(12),t.ALo(13,"date"),t.qZA()()()(),t.TgZ(14,"mat-card-content"),t._UZ(15,"mat-divider"),t.TgZ(16,"p",12),t._uU(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),t.qZA()(),t.TgZ(18,"mat-card-actions",13)(19,"button",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.viewUser(s))}),t._uU(20,"View"),t.qZA(),t.TgZ(21,"button",15),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.unfollow(s.id))}),t._uU(22,"Unfollow"),t.qZA()()()()}if(2&o){const e=n.$implicit;t.xp6(5),t.Oqu(e.username),t.xp6(3),t.hij("@placeholder_tag_",e.id,""),t.xp6(4),t.hij(" : ",t.lcZ(13,3,e.join_date)," ")}}function y(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"cdk-virtual-scroll-viewport",3),t.NdJ("scrolledIndexChange",function(l){t.CHM(e);const s=t.oxw();return t.KtG(s.scrollhandler(l))}),t.YNc(1,b,23,5,"div",4),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("itemSize",30),t.xp6(1),t.Q6J("cdkVirtualForOf",e.followings)}}let U=(()=>{class o{constructor(e,i){this.networkService=e,this.router=i,this.followings=[],this.currentUsers=0,this.pageNumber=1,this.theEnd=!1,this.isLoading=!0}scrollhandler(e){this.theEnd||e===this.followings.length-1&&(this.pageNumber+=1,this.getFollowings(this.pageNumber,30))}getFollowings(e,i){this.networkService.getFollowings(e,i).pipe((0,w.P)()).subscribe(l=>{0!==l.count?(this.followings=[...this.followings,...l.followings],this.currentUsers+=l.count):this.theEnd=!0,this.isLoading=!1})}unfollow(e){this.pageNumber=0,this.networkService.unFollow(e).pipe((0,w.P)()).subscribe(i=>{this.followings=[],this.getFollowings(this.pageNumber,30)})}viewUser(e){localStorage.setItem("current_visited_user",JSON.stringify(e)),this.router.navigate([`home/user/${e.id}`])}ngOnInit(){this.getFollowings(this.pageNumber,30)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-network-following"]],decls:2,vars:2,consts:[["class","virtualizer-viewport","fxLayout","row","fxLayoutAlign","center center",4,"ngIf"],["class","virtualizer-viewport",3,"itemSize","scrolledIndexChange",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center",1,"virtualizer-viewport"],[1,"virtualizer-viewport",3,"itemSize","scrolledIndexChange"],["class","explore-items",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"explore-items"],[1,"full-width"],[1,"m-b-0","text-bold","text-capitalize"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayout.lt-sm","column","fxLayoutAlign.lt-sm","start start",1,"full-width","m-b-16"],[1,"m-b-0","font-size-16","opacity-80"],[1,"m-b-0"],[1,"text-bold"],[1,"m-t-16"],["fxLayoutAlign","end center","fxLayoutAlign.lt-sm","space-between center"],["mat-button","","color","warn",3,"click"],["mat-button","","color","accent",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,Z,2,0,"div",0),t.YNc(1,y,2,2,"cdk-virtual-scroll-viewport",1)),2&e&&(t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading))},dependencies:[d.O5,m.xw,m.Wh,x.lW,a.a8,a.hq,a.dn,a.dk,_.d,F.Ou,c.xd,c.x0,c.N7,d.uU],styles:["[_nghost-%COMP%]   .virtualizer-viewport[_ngcontent-%COMP%]{height:94vh}[_nghost-%COMP%]   .explore-items[_ngcontent-%COMP%]{margin:20px}"]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-network-container"]],decls:5,vars:0,consts:[["color","accent"],["label","Following"],["label","Followers"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1),t._UZ(2,"app-network-following"),t.qZA(),t.TgZ(3,"mat-tab",2),t._UZ(4,"app-network-followers"),t.qZA()())},dependencies:[f.uX,f.SP,C,U]}),o})();var T=r(1447),L=r(6717);const z=[{path:"",component:A,title:"My Network - Fake Twitter"}];let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,T.o9,L.q,c.Cl,p.Bz.forChild(z)]}),o})()}}]);