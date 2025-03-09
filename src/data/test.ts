export const test = {
    "status": "completed",
    "result": {
        "_id": "67cd13925bb334cdadeed8a7",
        "createdDate": "2025-03-09T04:05:38.339Z",
        "results": {
            "testEngine": {
                "name": "axe-core",
                "version": "4.10.3"
            },
            "testRunner": {
                "name": "axe"
            },
            "testEnvironment": {
                "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/121.0.0.0 Safari/537.36",
                "windowWidth": 800,
                "windowHeight": 600,
                "orientationAngle": 0,
                "orientationType": "portrait-primary"
            },
            "timestamp": "2025-03-09T04:05:36.724Z",
            "url": "https://equalify.app/",
            "toolOptions": {
                "resultTypes": [
                    "violations",
                    "incomplete"
                ],
                "reporter": "v1"
            },
            "incomplete": [
                {
                    "id": "aria-prohibited-attr",
                    "impact": "serious",
                    "tags": [
                        "cat.aria",
                        "wcag2a",
                        "wcag412",
                        "EN-301-549",
                        "EN-9.4.1.2"
                    ],
                    "description": "Ensure ARIA attributes are not prohibited for an element's role",
                    "help": "Elements must only use permitted ARIA attributes",
                    "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr?application=axe-puppeteer",
                    "nodes": [
                        {
                            "any": [],
                            "all": [],
                            "none": [
                                {
                                    "id": "aria-prohibited-attr",
                                    "data": {
                                        "role": null,
                                        "nodeName": "div",
                                        "messageKey": "noRoleSingular",
                                        "prohibited": [
                                            "aria-label"
                                        ]
                                    },
                                    "relatedNodes": [],
                                    "impact": "serious",
                                    "message": "aria-label attribute is not well supported on a div with no valid role attribute."
                                }
                            ],
                            "impact": "serious",
                            "html": "<div class=\"html5-video-player ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color ytp-title-enable-channel-logo ytp-fine-scrubbing-exp ytp-embed ytp-embed-playlist unstarted-mode ytp-hide-controls ytp-small-mode\" tabindex=\"-1\" id=\"movie_player\" data-version=\"/s/player/f6e09c70/player_ias.vflset/en_US/base.js\" aria-label=\"YouTube Video Player\">",
                            "target": [
                                "iframe",
                                "#movie_player"
                            ],
                            "failureSummary": "Fix all of the following:\n  aria-label attribute is not well supported on a div with no valid role attribute."
                        }
                    ]
                },
                {
                    "id": "color-contrast",
                    "impact": "serious",
                    "tags": [
                        "cat.color",
                        "wcag2aa",
                        "wcag143",
                        "TTv5",
                        "TT13.c",
                        "EN-301-549",
                        "EN-9.1.4.3",
                        "ACT"
                    ],
                    "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
                    "help": "Elements must meet minimum color contrast ratio thresholds",
                    "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=axe-puppeteer",
                    "nodes": [
                        {
                            "any": [
                                {
                                    "id": "color-contrast",
                                    "data": {
                                        "contrastRatio": 0,
                                        "fontSize": "39.8pt (53.0496px)",
                                        "fontWeight": "bold",
                                        "messageKey": "bgImage",
                                        "expectedContrastRatio": "3:1"
                                    },
                                    "relatedNodes": [
                                        {
                                            "html": "<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-is-layout-5 wp-block-group-is-layout-constrained has-background\" id=\"callout\" style=\"border-bottom-color:var(--wp--preset--color--contrast-3);border-bottom-width:1px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--10);background-image:url('https://equalify.app/wp-content/uploads/2024/07/Equalify-banners-and-icons.001-1.jpeg');background-position:47% 100%;background-size:cover;\">",
                                            "target": [
                                                "#callout"
                                            ]
                                        }
                                    ],
                                    "impact": "serious",
                                    "message": "Element's background color could not be determined due to a background image"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "serious",
                            "html": "<h1 class=\"wp-block-heading has-text-align-left\" style=\"font-size:clamp(2.331rem, 2.331rem + ((1vw - 0.2rem) * 3.282), 4.3rem);\">Results-Driven Web Accessibility</h1>",
                            "target": [
                                "h1"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element's background color could not be determined due to a background image"
                        },
                        {
                            "any": [
                                {
                                    "id": "color-contrast",
                                    "data": {
                                        "contrastRatio": 0,
                                        "fontSize": "14.0pt (18.632px)",
                                        "fontWeight": "bold",
                                        "messageKey": "bgImage",
                                        "expectedContrastRatio": "4.5:1"
                                    },
                                    "relatedNodes": [
                                        {
                                            "html": "<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-is-layout-5 wp-block-group-is-layout-constrained has-background\" id=\"callout\" style=\"border-bottom-color:var(--wp--preset--color--contrast-3);border-bottom-width:1px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--10);background-image:url('https://equalify.app/wp-content/uploads/2024/07/Equalify-banners-and-icons.001-1.jpeg');background-position:47% 100%;background-size:cover;\">",
                                            "target": [
                                                "#callout"
                                            ]
                                        }
                                    ],
                                    "impact": "serious",
                                    "message": "Element's background color could not be determined due to a background image"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "serious",
                            "html": "<strong>Equalify’s web accessibility scanning platform eliminates blockers for people with disabilities</strong>",
                            "target": [
                                "p:nth-child(2) > strong"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element's background color could not be determined due to a background image"
                        },
                        {
                            "any": [
                                {
                                    "id": "color-contrast",
                                    "data": {
                                        "contrastRatio": 0,
                                        "fontSize": "10.8pt (14.4px)",
                                        "fontWeight": "normal",
                                        "messageKey": "bgImage",
                                        "expectedContrastRatio": "4.5:1"
                                    },
                                    "relatedNodes": [
                                        {
                                            "html": "<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-is-layout-5 wp-block-group-is-layout-constrained has-background\" id=\"callout\" style=\"border-bottom-color:var(--wp--preset--color--contrast-3);border-bottom-width:1px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--10);background-image:url('https://equalify.app/wp-content/uploads/2024/07/Equalify-banners-and-icons.001-1.jpeg');background-position:47% 100%;background-size:cover;\">",
                                            "target": [
                                                "#callout"
                                            ]
                                        }
                                    ],
                                    "impact": "serious",
                                    "message": "Element's background color could not be determined due to a background image"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "serious",
                            "html": "<p class=\"has-text-align-left has-small-font-size\"><strong>Questions?</strong> Email <a href=\"mailto:support@equalify.app\">support@equalify.app</a></p>",
                            "target": [
                                ".has-small-font-size.has-text-align-left"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element's background color could not be determined due to a background image"
                        },
                        {
                            "any": [
                                {
                                    "id": "color-contrast",
                                    "data": {
                                        "contrastRatio": 0,
                                        "fontSize": "10.8pt (14.4px)",
                                        "fontWeight": "bold",
                                        "messageKey": "bgImage",
                                        "expectedContrastRatio": "4.5:1"
                                    },
                                    "relatedNodes": [
                                        {
                                            "html": "<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-is-layout-5 wp-block-group-is-layout-constrained has-background\" id=\"callout\" style=\"border-bottom-color:var(--wp--preset--color--contrast-3);border-bottom-width:1px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--10);background-image:url('https://equalify.app/wp-content/uploads/2024/07/Equalify-banners-and-icons.001-1.jpeg');background-position:47% 100%;background-size:cover;\">",
                                            "target": [
                                                "#callout"
                                            ]
                                        }
                                    ],
                                    "impact": "serious",
                                    "message": "Element's background color could not be determined due to a background image"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "serious",
                            "html": "<strong>Questions?</strong>",
                            "target": [
                                ".has-small-font-size.has-text-align-left > strong"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element's background color could not be determined due to a background image"
                        },
                        {
                            "any": [
                                {
                                    "id": "color-contrast",
                                    "data": {
                                        "contrastRatio": 0,
                                        "fontSize": "10.8pt (14.4px)",
                                        "fontWeight": "normal",
                                        "messageKey": "bgImage",
                                        "expectedContrastRatio": "4.5:1"
                                    },
                                    "relatedNodes": [
                                        {
                                            "html": "<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-is-layout-5 wp-block-group-is-layout-constrained has-background\" id=\"callout\" style=\"border-bottom-color:var(--wp--preset--color--contrast-3);border-bottom-width:1px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--10);background-image:url('https://equalify.app/wp-content/uploads/2024/07/Equalify-banners-and-icons.001-1.jpeg');background-position:47% 100%;background-size:cover;\">",
                                            "target": [
                                                "#callout"
                                            ]
                                        }
                                    ],
                                    "impact": "serious",
                                    "message": "Element's background color could not be determined due to a background image"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "serious",
                            "html": "<a href=\"mailto:support@equalify.app\">support@equalify.app</a>",
                            "target": [
                                "a[href=\"mailto:support@equalify.app\"]"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element's background color could not be determined due to a background image"
                        },
                        {
                            "any": [
                                {
                                    "id": "color-contrast",
                                    "data": {
                                        "contrastRatio": 0,
                                        "fontSize": "26.1pt (34.7984px)",
                                        "fontWeight": "bold",
                                        "messageKey": "imgNode",
                                        "expectedContrastRatio": "3:1"
                                    },
                                    "relatedNodes": [
                                        {
                                            "html": "<span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim\" style=\"background-color:#344257\"></span>",
                                            "target": [
                                                ".wp-block-cover__background"
                                            ]
                                        },
                                        {
                                            "html": "<img width=\"1920\" height=\"1200\" class=\"wp-block-cover__image-background wp-image-384\" alt=\"\" src=\"https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001.jpeg\" style=\"object-position:50% 0%\" data-object-fit=\"cover\" data-object-position=\"50% 0%\" srcset=\"https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001.jpeg 1920w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-600x375.jpeg 600w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-1200x750.jpeg 1200w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-768x480.jpeg 768w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-1536x960.jpeg 1536w\" sizes=\"(max-width: 1920px) 100vw, 1920px\">",
                                            "target": [
                                                ".wp-block-cover__image-background"
                                            ]
                                        }
                                    ],
                                    "impact": "serious",
                                    "message": "Element's background color could not be determined because element contains an image node"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "serious",
                            "html": "<h2 class=\"wp-block-heading has-text-align-center is-style-default has-base-color has-text-color has-link-color wp-elements-89bb9db81be2cff08906c57d7ae2e11f\" style=\"margin-top:0;margin-bottom:0\">Featured Posts</h2>",
                            "target": [
                                ".wp-elements-89bb9db81be2cff08906c57d7ae2e11f"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element's background color could not be determined because element contains an image node"
                        },
                        {
                            "any": [
                                {
                                    "id": "color-contrast",
                                    "data": {
                                        "contrastRatio": 0,
                                        "fontSize": "10.8pt (14.4px)",
                                        "fontWeight": "normal",
                                        "messageKey": "imgNode",
                                        "expectedContrastRatio": "4.5:1"
                                    },
                                    "relatedNodes": [
                                        {
                                            "html": "<span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim\" style=\"background-color:#344257\"></span>",
                                            "target": [
                                                ".wp-block-cover__background"
                                            ]
                                        },
                                        {
                                            "html": "<img width=\"1920\" height=\"1200\" class=\"wp-block-cover__image-background wp-image-384\" alt=\"\" src=\"https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001.jpeg\" style=\"object-position:50% 0%\" data-object-fit=\"cover\" data-object-position=\"50% 0%\" srcset=\"https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001.jpeg 1920w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-600x375.jpeg 600w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-1200x750.jpeg 1200w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-768x480.jpeg 768w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-1536x960.jpeg 1536w\" sizes=\"(max-width: 1920px) 100vw, 1920px\">",
                                            "target": [
                                                ".wp-block-cover__image-background"
                                            ]
                                        }
                                    ],
                                    "impact": "serious",
                                    "message": "Element's background color could not be determined because element contains an image node"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "serious",
                            "html": "<a class=\"wp-block-button__link has-base-2-color has-text-color has-link-color wp-element-button\" href=\"https://equalify.app/blog/\">View More Posts</a>",
                            "target": [
                                ".has-base-2-color"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element's background color could not be determined because element contains an image node"
                        }
                    ]
                },
                {
                    "id": "empty-alt-tag",
                    "impact": "moderate",
                    "tags": [
                        "wcag2aa"
                    ],
                    "description": "Check if an image has a non-empty alt tag",
                    "help": "Non-decorative images should have a non-empty alt tag",
                    "helpUrl": "https://www.w3.org/WAI/tutorials/images/decorative/",
                    "nodes": [
                        {
                            "any": [
                                {
                                    "id": "non-empty-alt",
                                    "data": {
                                        "messageKey": "emptyAttr"
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Element has an empty alt attribute"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<img width=\"1920\" height=\"1200\" class=\"wp-block-cover__image-background wp-image-384\" alt=\"\" src=\"https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001.jpeg\" style=\"object-position:50% 0%\" data-object-fit=\"cover\" data-object-position=\"50% 0%\" srcset=\"https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001.jpeg 1920w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-600x375.jpeg 600w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-1200x750.jpeg 1200w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-768x480.jpeg 768w, https://equalify.app/wp-content/uploads/2024/01/Equalify-banners-and-icons.001-1536x960.jpeg 1536w\" sizes=\"(max-width: 1920px) 100vw, 1920px\">",
                            "target": [
                                ".wp-block-cover__image-background"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element has an empty alt attribute"
                        },
                        {
                            "any": [
                                {
                                    "id": "non-empty-alt",
                                    "data": {
                                        "messageKey": "emptyAttr"
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Element has an empty alt attribute"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<img width=\"463\" height=\"372\" src=\"https://equalify.app/wp-content/uploads/2024/07/icon-pro.png\" alt=\"\" class=\"wp-image-349\" style=\"width:auto;height:60px\">",
                            "target": [
                                ".wp-image-349"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element has an empty alt attribute"
                        },
                        {
                            "any": [
                                {
                                    "id": "non-empty-alt",
                                    "data": {
                                        "messageKey": "emptyAttr"
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Element has an empty alt attribute"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<img width=\"615\" height=\"372\" src=\"https://equalify.app/wp-content/uploads/2024/07/icon-a11y.png\" alt=\"\" class=\"wp-image-350\" style=\"width:auto;height:60px\" srcset=\"https://equalify.app/wp-content/uploads/2024/07/icon-a11y.png 615w, https://equalify.app/wp-content/uploads/2024/07/icon-a11y-600x363.png 600w\" sizes=\"(max-width: 615px) 100vw, 615px\">",
                            "target": [
                                ".wp-image-350"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element has an empty alt attribute"
                        },
                        {
                            "any": [
                                {
                                    "id": "non-empty-alt",
                                    "data": {
                                        "messageKey": "emptyAttr"
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Element has an empty alt attribute"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<img width=\"463\" height=\"372\" src=\"https://equalify.app/wp-content/uploads/2024/01/icon-code.png\" alt=\"\" class=\"wp-image-348\" style=\"width:auto;height:60px\">",
                            "target": [
                                ".wp-image-348"
                            ],
                            "failureSummary": "Fix any of the following:\n  Element has an empty alt attribute"
                        }
                    ]
                }
            ],
            "violations": [
                {
                    "id": "region",
                    "impact": "moderate",
                    "tags": [
                        "cat.keyboard",
                        "best-practice"
                    ],
                    "description": "Ensure all page content is contained by landmarks",
                    "help": "All page content should be contained by landmarks",
                    "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/region?application=axe-puppeteer",
                    "nodes": [
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<div class=\"wp-block-group alignfull has-base-2-background-color has-background is-layout-flow wp-block-group-is-layout-flow\" id=\"alert\" style=\"border-top-style:none;border-top-width:0px;border-right-style:none;border-right-width:0px;border-bottom-color:var(--wp--preset--color--contrast-3);border-bottom-width:1px;border-left-style:none;border-left-width:0px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--10);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--10);padding-left:var(--wp--preset--spacing--10)\">",
                            "target": [
                                "#alert"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-is-layout-5 wp-block-group-is-layout-constrained has-background\" id=\"callout\" style=\"border-bottom-color:var(--wp--preset--color--contrast-3);border-bottom-width:1px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--10);background-image:url('https://equalify.app/wp-content/uploads/2024/07/Equalify-banners-and-icons.001-1.jpeg');background-position:47% 100%;background-size:cover;\">",
                            "target": [
                                "#callout"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<div class=\"wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\">",
                            "target": [
                                ".wp-container-core-group-is-layout-7 > .has-global-padding.is-layout-constrained.wp-block-group-is-layout-constrained"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<div id=\"player\" style=\"width: 100%; height: 100%;\">",
                            "target": [
                                "iframe",
                                "#player"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<figcaption class=\"wp-element-caption\">Equalify Version One Beta Video Walkthrough</figcaption>",
                            "target": [
                                "figcaption"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<div class=\"wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow\">",
                            "target": [
                                ".wp-block-cover__inner-container"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-is-layout-24 wp-block-group-is-layout-constrained\" id=\"faqs\" style=\"border-top-color:var(--wp--preset--color--accent-5);border-top-width:1px;margin-top:0;padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--10)\">",
                            "target": [
                                "#faqs"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<div class=\"wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow\" style=\"flex-basis:65%\">",
                            "target": [
                                ".wp-block-column.is-vertically-aligned-center.wp-block-column-is-layout-flow:nth-child(1)"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<h3 class=\"wp-block-heading has-text-align-center is-style-default\" style=\"margin-top:0\">Social Links</h3>",
                            "target": [
                                ".wp-container-core-group-is-layout-26 > .is-style-default"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<span class=\"wp-block-social-link-label screen-reader-text\">Equalify GitHub Organization</span>",
                            "target": [
                                ".wp-social-link-github > .wp-block-social-link-anchor > .wp-block-social-link-label.screen-reader-text"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<span class=\"wp-block-social-link-label screen-reader-text\">Equalify LinkedIn</span>",
                            "target": [
                                ".wp-social-link-linkedin > .wp-block-social-link-anchor > .wp-block-social-link-label.screen-reader-text"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<span class=\"wp-block-social-link-label screen-reader-text\">Equalify YouTube Channel</span>",
                            "target": [
                                ".wp-social-link-youtube > .wp-block-social-link-anchor > .wp-block-social-link-label.screen-reader-text"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<span class=\"wp-block-social-link-label screen-reader-text\">Equalify on X (Formally Twitter)</span>",
                            "target": [
                                ".wp-social-link-x > a[href$=\"equalifyapp\"] > .wp-block-social-link-label.screen-reader-text"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        },
                        {
                            "any": [
                                {
                                    "id": "region",
                                    "data": {
                                        "isIframe": false
                                    },
                                    "relatedNodes": [],
                                    "impact": "moderate",
                                    "message": "Some page content is not contained by landmarks"
                                }
                            ],
                            "all": [],
                            "none": [],
                            "impact": "moderate",
                            "html": "<p class=\"has-text-align-center has-small-font-size\"><em>Together we can Equalify the internet.</em></p>",
                            "target": [
                                ".wp-container-core-group-is-layout-26 > .has-small-font-size"
                            ],
                            "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                        }
                    ]
                }
            ]
        },
        "jobID": "591294",
        "editoria11yResults": [
            {
                "content": "<p>Unless this image is purely decorative (a spacer icon or background texture), an alt should probably be provided. Photos in page content <strong>almost always need alt text.</strong> Since many screen reader users can see there is an image present, it can be very confusing to move the cursor across the place on the page where an image is visible, but hear nothing.</p>\n        <p>Note that a <a href=\"https://www.w3.org/WAI/tutorials/images/informative\" target=\"_blank\" title=\"Opens in new tab\">good alt describes the image's message</a>, not simply what it contains. Depending on the context, the alt for the picture of a child kicking a ball might emphasize the setting, the child, the kick or the ball:</p>\n            <ul>\n                <li>The sunny spring day brought kids to the park for some soccer.</li>\n                <li>A.J. wearing the new team uniform.</li>\n                <li>The game-winning kick curved in from the left sideline!</li>\n                <li>The size 4 ball is the right size for this 9-year-old child.</li>\n            </ul>",
                "test": "altNull",
                "node": ""
            },
            {
                "content": "<p>Unless this image is purely decorative (a spacer icon or background texture), an alt should probably be provided. Photos in page content <strong>almost always need alt text.</strong> Since many screen reader users can see there is an image present, it can be very confusing to move the cursor across the place on the page where an image is visible, but hear nothing.</p>\n        <p>Note that a <a href=\"https://www.w3.org/WAI/tutorials/images/informative\" target=\"_blank\" title=\"Opens in new tab\">good alt describes the image's message</a>, not simply what it contains. Depending on the context, the alt for the picture of a child kicking a ball might emphasize the setting, the child, the kick or the ball:</p>\n            <ul>\n                <li>The sunny spring day brought kids to the park for some soccer.</li>\n                <li>A.J. wearing the new team uniform.</li>\n                <li>The game-winning kick curved in from the left sideline!</li>\n                <li>The size 4 ball is the right size for this 9-year-old child.</li>\n            </ul>",
                "test": "altNull",
                "node": ""
            },
            {
                "content": "<p>Unless this image is purely decorative (a spacer icon or background texture), an alt should probably be provided. Photos in page content <strong>almost always need alt text.</strong> Since many screen reader users can see there is an image present, it can be very confusing to move the cursor across the place on the page where an image is visible, but hear nothing.</p>\n        <p>Note that a <a href=\"https://www.w3.org/WAI/tutorials/images/informative\" target=\"_blank\" title=\"Opens in new tab\">good alt describes the image's message</a>, not simply what it contains. Depending on the context, the alt for the picture of a child kicking a ball might emphasize the setting, the child, the kick or the ball:</p>\n            <ul>\n                <li>The sunny spring day brought kids to the park for some soccer.</li>\n                <li>A.J. wearing the new team uniform.</li>\n                <li>The game-winning kick curved in from the left sideline!</li>\n                <li>The size 4 ball is the right size for this 9-year-old child.</li>\n            </ul>",
                "test": "altNull",
                "node": ""
            },
            {
                "content": "<p>Unless this image is purely decorative (a spacer icon or background texture), an alt should probably be provided. Photos in page content <strong>almost always need alt text.</strong> Since many screen reader users can see there is an image present, it can be very confusing to move the cursor across the place on the page where an image is visible, but hear nothing.</p>\n        <p>Note that a <a href=\"https://www.w3.org/WAI/tutorials/images/informative\" target=\"_blank\" title=\"Opens in new tab\">good alt describes the image's message</a>, not simply what it contains. Depending on the context, the alt for the picture of a child kicking a ball might emphasize the setting, the child, the kick or the ball:</p>\n            <ul>\n                <li>The sunny spring day brought kids to the park for some soccer.</li>\n                <li>A.J. wearing the new team uniform.</li>\n                <li>The game-winning kick curved in from the left sideline!</li>\n                <li>The size 4 ball is the right size for this 9-year-old child.</li>\n            </ul>",
                "test": "altNull",
                "node": ""
            },
            {
                "content": "<p>If a recorded video contains speech or meaningful sounds, it must <a href=\"https://www.w3.org/WAI/media/av/captions/\" title=\"Opens in new window\" target=\"_blank\">provide captions</a>.</p>\n            <p>Note that automatic, machine-generated captions must be proofread, and speaker identifications must be added, before being considered an equal alternative.</p>",
                "test": "embedVideo",
                "node": ""
            }
        ]
    }
}