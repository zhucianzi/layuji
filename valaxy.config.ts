import { defineValaxyConfig } from "valaxy";
import { addonLightGallery } from "valaxy-addon-lightgallery";
import { addonPermalink } from "valaxy-addon-permalink";
import type { UserThemeConfig } from "valaxy-theme-yun";

const safelist = [
    "i-ri-home-line"
];

export default defineValaxyConfig<UserThemeConfig>({
    theme: "yun",
    themeConfig: {
        banner: {
            enable: true,
            title: "蜡羽集",
            cloud: {
                enable: true
            }
        },
        pages: [
            {
                name: "图集",
                url: "/gallery/",
                icon: "i-ri-folder-image-line",
                color: "hotpink"
            },
            {
                name: "我的小伙伴们",
                url: "/links/",
                icon: "i-ri-genderless-line",
                color: "dodgerblue"
            }
        ],
        footer: {
            since: 2023,
            beian: {
                enable: false,
                icp: ""
            }
        },
        colors: {
            primary: "#beb4b3"
        }
    },
    addons: [
        addonLightGallery(),
        addonPermalink()
    ],
    unocss: { safelist }
});