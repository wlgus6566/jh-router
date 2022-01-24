import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '@/views/home';
import Dynamic from '@/views/dynamic';
import CodeSplitting from '@/views/code-splitting';
import dynamicList from '@/views/dynamic/list';
import dynamicView from '@/views/dynamic/view';
import NavMethods from '@/views/nav-methods';
import NavGuard from '@/views/nav-guard';
import Redirect from '@/views/redirect';
import RedirectSubmenu1 from '@/views/redirect/submenu1';
import RedirectSubmenu2 from '@/views/redirect/submenu2';
import MyPage from '@/views/my-page';
import ScrollBehavior from '@/views/scroll-behavior';
import Error from '@/views/error-404';
import Login from '@/views/login';*/

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: "home",
            component: () => import('@/views/home.vue'),
            //component: Home,
            meta: {
                title: 'HOME',
                layout: 'layout1',
                scrollTo: 300
            },
        },
        {
            path: '/code-splitting',
            name: "code-splitting",
            component: () => import('@/views/code-splitting.vue'),
            //component: codeSplitting,
            meta: {
                title: '코드 스플리팅',
                layout: 'layout2',
            },
        },
        {
            path: '/dynamic',
            component: () => import('@/views/dynamic'),
            //component: Dynamic,
            meta: {
                title: '동적라우팅',
            },
            children: [
                {
                    path: '/',
                    name: "dynamic-list",
                    component: () => import('@/views/dynamic/list'),
                    //component: dynamicList,
                    meta: {
                        title: 'dynamic 리스트',
                    }
                },
                {
                    // 동적 라우트 매칭
                    path: ':id',
                    name: "dynamic-view",
                    component: () => import('@/views/dynamic/view'),
                    //component: dynamicView,
                    meta: {
                        title: 'dynamic 상세페이지',
                    },
/*                    beforeEnter(to, from, next) {
                        if(isNaN(to.params.id)) {
                            next('/error-404')
                        } else {
                            next()
                        }
                    },*/
                },
            ]
        },
        {
            path: '/nav-methods',
            name: "nav-methods",
            component: () => import('@/views/nav-methods.vue'),
            //component: NavMethods,
            meta: {
                title: '라우터 네비게이션 메소드',
                layout: 'layout2'
            }
        },
        {
            path: '/nav-guard',
            name: "nav-guard",
            component: () => import('@/views/nav-guard.vue'),
            //component: NavGuard,
            meta: {
                title: '라우터 네비게이션 가드',
                layout: 'layout2'
            }
        },
        {
            path: '/my-page',
            name: "my-page",
            component: () => import('@/views/my-page.vue'),
            //component: MyPage,
            meta: {
                title: '마이페이지',
                authRequired: true
            }
        },
        {
            path: '/login',
            name: "login",
                component: () => import('@/views/login.vue'),
                //component: Login,
                meta: {
                title: '로그인페이지',
            }
        },
        {
            path: '/redirect',
            name: "redirect",
            component: () => import('@/views/redirect'),
            //component: Redirect,
            meta: {
                title: '리다이렉트',
            },
            //redirect: '/redirect/submenu1',
            children: [
                {
                    path: 'submenu1',
                    name: "submenu1",
                    component: () => import('@/views/redirect/submenu1.vue'),
                    //component: RedirectSubmenu1,
                    meta: {
                        title: '리다이렉트 - 서브메뉴1',
                    },
                },
                {
                    path: 'submenu2',
                    name: "submenu2",
                    component: () => import('@/views/redirect/submenu2.vue'),
                    //component: RedirectSubmenu2,
                    meta: {
                        title: '리다이렉트 - 서브메뉴2',
                    },
                }
            ],
        },
        {
            path: '/scroll-behavior',
            name: "scroll-behavior",
            component: () => import('@/views/scroll-behavior.vue'),
            //component: ScrollBehavior,
            meta: {
                title: 'Scroll Behavior',
            }
        },
        {
            path: '*',
            name: "error-404",
            component: () => import('@/views/error-404.vue'),
            //component: Error,
            meta: {
                title: '404',
            }
        },
    ],
/*    scrollBehavior (to, from, savedPosition) {
        console.log('savedPosition: ',savedPosition) // 이전에 컴포넌트에 위치했었던 스크롤 위치 객체를 반환
        // savedPosition은 히스토리 모드(뒤로가기, 앞으로가기)에서만 작동
        if (savedPosition) {
            return savedPosition //history mode에서는 이전위치로 위치
        }

        // 사용자 정의
/!*           if (to.meta.scrollTo) {
               return{
                   x: 0,
                   y: to.meta.scrollTo,
                   //behavior: 'smooth'
               }
           }*!/
        return {x: 0, y: 0}; //router로 이동할 때에는 맨위로 위치하게
    }*/
})

// ** 전역가드
// router 인스턴스에 아래와 같이 .beforeEach() API를 호출
// to : 이동한 url 정보가 담긴 라우터 객체
// from : 이동전 url 정보가 담긴 라우터 객체
// next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
/*
router.beforeEach( (to, from, next) => {
    console.log('to: ',to)
    console.log('from: ',from)
    next()
    if(to.meta.authRequired) {
        alert('로그인이 필요합니다.')
        next('/login')
    } else {
        next();
    }
})
*/

export default router