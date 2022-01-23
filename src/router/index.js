import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//뷰 라우터를 설치하고 나면 아래 코드와 같이 라우터 인스턴스를 하나 생성
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: "home",
            component: () => import('@/views/home.vue'),
            meta: {
                title: 'HOME',
                layout: 'layout1',
                //scrollTo300: true
            }
        },
        {
            path: '/about',
            name: "about",
            component: () => import('@/views/about'),
            meta: {
                title: 'ABOUT',
                layout: 'layout2'
            },
            children: [
                {
                    path: '/',
                    name: "about-list",
                    component: () => import('@/views/about/list'),
                    meta: {
                        title: 'ABOUT 리스트',
                    }
                },
                {
                    path: ':id',
                    name: "about-view",
                    component: () => import('@/views/about/view'),
                    meta: {
                        title: 'ABOUT 상세페이지',
                    },
/*                    beforeEnter(to, from, next) {
                        if (isNaN(to.params.id)) {
                            next("404");
                        } else {
                            next();
                        }
                    },*/
                },
            ]
        },
        {
            path: '/nav-methods',
            name: "nav-methods",
            component: () => import('@/views/nav-methods.vue'),
            meta: {
                title: '라우터 네비게이션 메서드',
                layout: 'layout2'
            }
        },
        {
            path: '/nav-guard',
            name: "nav-guard",
            component: () => import('@/views/nav-guard.vue'),
            meta: {
                title: '라우터 네비게이션 가드',
                layout: 'layout2'
            }
        },
        {
            path: '/my-page',
            name: "my-page",
            component: () => import('@/views/my-page.vue'),
            meta: {
                title: '마이페이지',
                authRequired: true // meta 정보에 authRequired라는 Boolean 값 추가
            }
        },
        {
            path: '/login',
            name: "login",
                component: () => import('@/views/login.vue'),
                meta: {
                title: '로그인페이지',
            }
        },
        {
            path: '/redirect',
            name: "redirect",
            component: () => import('@/views/redirect'),
            meta: {
                title: '리다이렉트',
            },
            redirect: '/redirect/submenu1',
            children: [
                {
                    path: 'submenu1',
                    name: "submenu1",
                    component: () => import('@/views/redirect/submenu1.vue'),
                    meta: {
                        title: '리다이렉트 - 서브메뉴1',
                    },
                }
            ],
        },
        {
            path: '*',
            name: "404",
            component: () => import('@/views/404.vue'),
            meta: {
                title: '404',
            }
        },
    ],
    // 컨텐츠 항목의 스크롤 위치를 유지할 수 있음
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) { // savedPosition은 히스토리 모드(뒤로가기, 앞으로가기)에서만 작동
            console.log(savedPosition)// 스크롤 위치 객체를 반환
            return savedPosition
        } else {
            return { x: 0, y: 0 };
        }

        // 사용자 정의
/*        if (to.matched.some(m => m.meta.scrollTo300)) {
            return{ x: 0, y: 300 }
        }*/
    }
})

// ** 전역가드
// router 인스턴스에 아래와 같이 .beforeEach() API를 호출
// to : 이동할 url 정보가 담긴 라우터 객체
// from : 현재 url 정보가 담긴 라우터 객체
// next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
router.beforeEach(function ( to, from,next) {
    //console.log("to: ",to)
    //console.log(to.matched[0].meta === to.meta)
    if(to.meta.authRequired) {
        alert('로그인을 진행하세요.')
        next('/login')
    } else {
        next();
    }
});

export default router