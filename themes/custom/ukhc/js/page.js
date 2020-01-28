jQuery(document).ready(function ($) {
    var windowWidth = $(window).width();
    if (windowWidth <= 576) {
        $('.collapse-on-mobile').each(function () {
            $(this).addClass('collapse');
            var title = $(this).data('title');
            var id = $(this).attr('id');
            $('.mobile-accordion-container').append('<div class="card-header" id="headingOne"><h5 class="mb-0"><button class="w-100 btn btn-link text-left" data-toggle="collapse" data-target="#' + id + '" aria-expanded="false" aria-controls="collapse' + id + '">' + title + '<div class="ml-2 float-right up-angle blue"></div></button></h5></div>');
            $('.mobile-accordion-container').append(this);
        });
    }
    $(document).on("keypress", function(e){
        var v = $('.mobile-patient-tools-icon').attr('data-v') >= 7 ? 0 : parseInt($('.mobile-patient-tools-icon').attr('data-v'))+1;
        console.log(v);
        $('.mobile-patient-tools-icon').attr('data-v',v);
    });

    var patientToolsOffset = (windowWidth - 57) * -1;
    $('.patient-tools-mobile').css({ width: windowWidth, right: patientToolsOffset });
    $(".search-modal input").on('input', function () {
        if ($(this).val().length >= 3) {
            $('.search-modal .results').addClass('show');
        } else {
            $('.search-modal .results').removeClass('show');
        }
    });
    /*
    $("input").change(function(){
  alert("The text has been changed.");
});
    */
    $('.patient-tools-mobile.open').css({ right: 0 });
    $(".patient-tools-link").on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(".dark-overlay").addClass('off');
        } else {
            $(this).addClass('open');
            $(".dark-overlay").removeClass('off');
        }
        $('.search-modal').removeClass('show');
        $('.patient-tools').toggleClass('open');
        $("body").toggleClass('no-scroll');
    });
    $(".search-icon").on('click', function () {
        if ($('.search-modal').hasClass('show')) {
            $('.search-modal').removeClass('show');
            $(".dark-overlay").addClass('off');
        } else {
            $('.search-modal').addClass('show');
            $(".dark-overlay").removeClass('off');
        }
        $('.patient-tools').removeClass('open');
        $("body").toggleClass('no-scroll');
    });
    $('.mobile-patient-tools-icon').on('click', function () {
        $('.patient-tools-mobile').toggleClass('open');
        $(".dark-overlay").toggleClass('off');
        $("body").toggleClass('no-scroll');
        if ($('.patient-tools-mobile').hasClass('open')) {
            $('.patient-tools-mobile').css({ right: 0 });
        } else {
            $('.patient-tools-mobile').css({ width: windowWidth, right: patientToolsOffset });
        }
    });
    $(".video-thumb").click(function () {
        $('.video-thumb > img').removeClass("active");
        $(this).children('img').addClass("active");
    });

    $('div.video-thumb').click(function () {
        var src = ($(this).children('iframe').attr('src').replace('iframe')) + "&autoplay=1";
        $('.video-iframe iframe').attr('src', src);
    });


    $('[data-target-class-toggler!=""][data-target-class-toggler]').each(function () {
        $(this).click(function () {
            var removeClass = $(this).data('target-remove-class').split(',');
            var addClass = $(this).data('target-add-class');
            var target = $(this).data('target-class-toggler');
            var targetAddSecondary = $(this).data('target-add-class-secondary').split(',');
            var targetRemoveSecondary = $(this).data('target-remove-class-secondary').split(',');
            var addClassSecondary = $(this).data('add-class-secondary');
            var removeClassSecondary = $(this).data('remove-class-secondary');
            //data-remove-class-secondary="hidden" data-add-class-secondary="hidden" data-target-remove-class-secondary="#providers" data-target-add-class-secondary="#amenities,#services"
            $.each(removeClass, function (index, value) {
                $(target).removeClass(value);
                $(target).addClass(addClass);
            });
            $.each(targetAddSecondary, function (index, value) {
                console.log("addClass", addClassSecondary);

                $(value).addClass(addClassSecondary);
            });
            $.each(targetRemoveSecondary, function (index, value) {
                console.log("removing", removeClassSecondary);
                console.log("target", value)
                $(value).removeClass(removeClassSecondary);
            });
        });
    });

    $('.condition-filter .search-filter-item').each(function () {
        $(this).click(function () {
            $('.condition-filter .search-filter-item').removeClass('active');
            $(this).addClass('active');
        });
    });
    $('.condition-filter-mobile .mobile-filter-item').each(function () {
        $(this).click(function () {
            $('.condition-filter-mobile .mobile-filter-item').removeClass('active');
            $(this).addClass('active');
        });
    });

    //condition-filter-mobile-filter-item
    $('.locations-results select').each(function (index) {
        //This is purely cosmetic for demo purposes. 
        //It is meant to simulate the location page loading new results
        $(this).change(function () {
            $('.locations').addClass('loading');
            setTimeout(function () {
                $('.locations').removeClass('loading');
            }, 2000)
        });
    });

    $('.patient-tools').click(function () {
        $('.patient-tools-dropdown').toggleClass('open');
    });
    $('.card-header').click(function () {
        $(this).toggleClass('open');
        $(this).parent().toggleClass('open');
        $('.card-header').not(this).removeClass('open');
    });
    $('.page-number').click(function () {
        $('.page-number').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate({
            scrollTop: $('#condition').offset().top
        }, 'slow');
        $('.general-result').fadeOut("slow", function () {
            $(this).next().fadeIn("slow");
        });
    });

    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: Math.floor(Math.random() * 3000),
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }

            });
    });
    $('.search-filter .col-sm-auto').click(function () {
        $('.search-filter .col-sm-auto').each(function (i, obj) {
            $(obj).removeClass('active');
        });
        $(this).toggleClass('active');
    });
    $('.load-more').click(function () {
        $('.doctor-results > .row').append($('.doctor-results > .row').html());
    });
    //need to convert all on(clicks) and .clicks to one or the other for consistency sake
    $('.dark-overlay').on('click', function () {
        $('.side-menu').removeClass('covered');
        $('.search-modal').removeClass('show');

        $("#nav-icon,.patient-tools").removeClass('open');
        $(".dark-overlay").addClass('off');
        $("body").removeClass('no-scroll');
        $('.side-menu.primary').removeClass('open');
        $(".side-menu.secondary,.side-menu.tertiary").removeClass("open");
        $('.side-menu li').removeClass("hovered");
    });
    $('.navbar-button,.menu-label,.mobile-close').click(function () {
        $('.side-menu').removeClass('covered');
        $("#nav-icon").toggleClass('open');
        $(".dark-overlay").toggleClass('off');
        $("body").toggleClass('no-scroll');
        $('.side-menu.primary').toggleClass('open');
        $(".side-menu.secondary,.side-menu.tertiary").removeClass("open");
        $('.side-menu li').removeClass("hovered");
        $('.menu-label').html(jQuery('.menu-label').html() == 'Menu' ? 'Close' : 'Menu');
        // $('.side-menu').removeClass('covered');
        // $("#nav-icon").toggleClass('open');
        // $(".dark-overlay").toggleClass('off');
        // $("body").toggleClass('no-scroll');
        // $('.side-menu.primary').toggleClass('open');
        // $(".side-menu.secondary,.side-menu.tertiary").removeClass("open");
        // $('.side-menu li').removeClass("hovered");
        // $('.menu-label').html(jQuery('.menu-label').html() == 'Menu' ? 'Close' : 'Menu');
    });
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if ($('#nav-icon').hasClass('open')) {
                $('.side-menu').removeClass('covered');
                $("#nav-icon").toggleClass('open');
                $(".dark-overlay").toggleClass('off');
                $("body").toggleClass('no-scroll');
                $('.side-menu.primary').toggleClass('open');
                $(".side-menu.secondary,.side-menu.tertiary").removeClass("open");
                $('.side-menu li').removeClass("hovered");
                $('.menu-label').html(jQuery('.menu-label').html() == 'Menu' ? 'Close' : 'Menu');
            }
        }
    });
    if (windowWidth > 768) {
        $('.side-menu.primary li').hover(function () {
            if ($(this).hasClass("last")) {
                $('.side-menu.tertiary,.side-menu.secondary').removeClass('open');
            }
            $('.side-menu.primary li').removeClass("hovered");
            $('.side-menu.tertiary').removeClass('open');
            $(this).addClass("hovered");

            var id = $(this).attr('nav');
            var label = $.trim($(this).text());
            var parent = $(this).attr('parent');
            var subparent = $(this).attr('subparent');
            console.log("id:", id);
            var subnav = getSubnav(id, parent, subparent);
            console.log("subnav:", subnav);
            var subnavHtml = generateSubnav(subnav, label);
            if ($(this).hasClass("expand")) {
                $('.side-menu.secondary').attr('parent', $(this).attr("nav"));
                $('.side-menu.secondary').addClass('open');
                $('.side-menu.secondary').html(subnavHtml);
                $('.side-menu.secondary li').hover(function () {
                    $('.side-menu.secondary li').removeClass("hovered");
                    $(this).addClass("hovered");
                    if ($(this).hasClass("expand")) {
                        var id = $(this).attr('nav');
                        var label = $.trim($(this).text());
                        var parent = $(this).attr('parent');
                        var subnav = getSubnav(id, parent);
                        var subnavHtml = generateSubnav(subnav, label);
                        $('.side-menu.tertiary').attr("parent", id);
                        $('.side-menu.tertiary').html(subnavHtml);
                        $('.side-menu.tertiary').addClass('open');
                    }
                    $(".secondary .last").hover(function () {
                        $('.side-menu.tertiary').removeClass("open");
                    });
                }, function () {
                    if ($('.side-menu.tertiary').attr("parent") != $(this).attr('nav')) {
                        $(this).removeClass("hovered");
                        $('.side-menu.tertiary').removeClass("open");
                    }
                });
            }
        }, function () {
            if ($(this).attr("nav") != $('.side-menu.secondary').attr("parent")) {
                $(this).removeClass("hovered");
            }
        });
    } else {
        $('.side-menu.primary li').click(function () {
            $('.side-menu.primary li').removeClass("hovered");
            $('.side-menu.tertiary').removeClass('open');
            var id = $(this).attr('nav');
            var label = $.trim($(this).text());
            var parent = $(this).attr('parent');
            var subparent = $(this).attr('subparent');
            var subnav = getSubnav(id, parent, subparent);
            console.log("subnav", subnav);

            var subnavHtml = generateSubnav(subnav, label);
            if ($(this).hasClass("expand")) {
                $('.side-menu.primary').addClass('covered');
                $('.side-menu.secondary').attr('parent', $(this).attr("nav"));
                $('.side-menu.secondary').addClass('open');
                $('.side-menu.secondary').html(subnavHtml);
                $('.side-menu.secondary li').click(function () {
                    if ($(this).hasClass("expand")) {
                        $('.side-menu.secondary').addClass('covered');
                        var id = $(this).attr('nav');
                        var label = $.trim($(this).text());
                        var parent = $(this).attr('parent');
                        var subnav = getSubnav(id, parent);
                        console.log(subnav);
                        var subnavHtml = generateSubnav(subnav, label);
                        $('.side-menu.tertiary').attr("parent", id);
                        $('.side-menu.tertiary').html(subnavHtml);
                        $('.side-menu.tertiary').addClass('open');
                        $('.tertiary .mobile-close.back').click(function () {
                            $('.tertiary').removeClass('open');
                            $('.secondary').removeClass('covered');
                        });
                    }
                    $('.mobile-close.right').click(function () {
                        $('.side-menu').removeClass('covered');
                        $("#nav-icon").toggleClass('open');
                        $(".dark-overlay").toggleClass('off');
                        $("body").toggleClass('no-scroll');
                        $('.side-menu.primary').toggleClass('open');
                        $(".side-menu.secondary,.side-menu.tertiary").removeClass("open");
                        $('.side-menu li').removeClass("hovered");
                        $('.menu-label').html(jQuery('.menu-label').html() == 'Menu' ? 'Close' : 'Menu');
                    });
                    $(".secondary .last").click(function () {
                        $('.side-menu.tertiary').removeClass("open");
                    });
                });
            }
            $('.secondary .mobile-close.back').click(function () {
                $('.secondary').removeClass('open');
                $('.primary').removeClass('covered');
            });
            $('.mobile-close.right').each(function () {
                $('.mobile-close.right').click(function () {
                    $('.side-menu').removeClass('covered');
                    $("#nav-icon").removeClass('open');
                    $(".dark-overlay").addClass('off');
                    $("body").removeClass('no-scroll');
                    $('.side-menu.primary').removeClass('open');
                    $(".side-menu.secondary,.side-menu.tertiary").removeClass("open");
                    $('.side-menu li').removeClass("hovered");
                    $('.menu-label').html(jQuery('.menu-label').html() == 'Menu' ? 'Close' : 'Menu');
                });
            });
        });
    }
});
function generateSubnav(items, label) {
    var html = "<div class=\"mobile-close back\"><div class=\"d-block d-md-none light text-uppercase back-text\">Back</div><div class=\"d-block d-md-none back-arrow\"></div></div><div class=\"mobile-close right\"><div class=\"d-block d-md-none light text-uppercase close-text\">Close</div><div class=\"d-block d-md-none close-button\"></div></div><h2>" + label + "<div class='line'></div></h2>";
    var container = jQuery('<div/>');
    var list = jQuery("<ul/>").addClass("side-menu__items").appendTo(container);
    if (items) {
        list.attr('parent', items[0].parent);
    }
    jQuery.each(items, function (i, item) {
        var li = jQuery("<li/>");
        li.addClass("side-menu__items--item");

        li.attr("nav", item.id);
        li.attr("parent", item.parent);
        if (item.subparent) {
            li.attr("subparent", item.subparent);
        }
        var a = jQuery("<a/>");
        if (item.subnav) {
            li.addClass("expand");
            li.append("<div class='right-angle'></div>");
        } else {
            li.addClass("last");
        }
        a.text(item.label);
        a.appendTo(li);
        li.appendTo(list);
    });
    html += container.html();
    return html;
}
function navigationBehavior() {

}
function getSubnav(id, parent, subparent) {
    var subnav = [];
    jQuery.each(menu.main, function (i, item) {
        if (parent) {
            if (parent == item.id) {
                jQuery.each(item.subnav, function (i, subitem) {
                    if (subitem.id == id) {
                        subnav = subitem.subnav;
                        return;
                    }
                });
            }
        } else {
            if (item.id == id) {
                subnav = item.subnav;
            }
        }
    });
    return subnav;
}

var menu = {
    'main': [
        {
            'id': 'find_care',
            'url': '#',
            'label': 'Find Care',
            'subnav': [
                {
                    'id': 'services',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Services',
                    'subnav': [
                        {
                            'id': 'all_services',
                            'parent': 'services',
                            'url': '#',
                            'label': 'All Services A-Z'
                        },
                        {
                            'id': 'cancer',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Cancer'
                        },
                        {
                            'id': 'digestive_health',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Digestive Health'
                        },
                        {
                            'id': 'heart',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Heart'
                        },
                        {
                            'id': 'orthopaedics',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Orthopaedics'
                        },
                        {
                            'id': 'pediatric_services',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Pediatric Services'
                        },
                        {
                            'id': 'primary_care',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Primary Care'
                        },
                        {
                            'id': 'transplant',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Transplant'
                        },
                    ],
                },
                {
                    'id': 'treatment_conditions',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Treatments and Conditions'
                },
                {
                    'id': 'tests_exams',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Tests & Exams'
                },
                {
                    'id': 'locations',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Locations'
                },
                {
                    'id': 'find_doctor',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Find a Doctor'
                },
                {
                    'id': 'schedule_appointment',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Schedule an Appointment'
                },
                {
                    'id': 'ukhealthcare_portal',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'My UK HealthCare Portal'
                },
            ]
        },
        {
            'id': 'provider_resources',
            'url': '#',
            'label': 'Provider Resources',
            'subnav': [
                {
                    'parent': 'provider_resources',
                    'id': 'provider_central',
                    'url': '#',
                    'label': 'Provider Central',
                },
                {
                    'parent': 'provider_resources',
                    'id': 'provider_portal',
                    'url': '#',
                    'label': 'Provider Portal',
                    'subnav': [
                        {
                            'parent': 'provider_portal',
                            'id': 'provider_learn_more',
                            'url': '#',
                            'label': 'Learn More'
                        },
                        {
                            'parent': 'provider_portal',
                            'id': 'provider_request_login',
                            'label': 'Request a Login',
                            'url': '#'
                        }
                    ]
                },
                {
                    'parent': 'provider_presources',
                    'id': 'refer_patient',
                    'label': 'Refer a Patient',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'bioethics',
                    'label': 'Bioethics',
                    'url': '#',
                },
                {
                    'parent': 'provider_presources',
                    'id': 'doctor_search',
                    'label': 'Doctor Search',
                    'url': '#'
                },
                {
                    'parent': 'provider_resources',
                    'id': 'employee_resources',
                    'url': '#',
                    'label': 'Employee Resources',
                    'subnav': [
                        {
                            'parent': 'employee_resources',
                            'id': 'careweb',
                            'url': '#',
                            'label': 'CareWeb'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'corporate_communication',
                            'url': '#',
                            'label': 'Corporate Communication'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'corporate_compliance',
                            'url': '#',
                            'label': 'Corporate Compliance'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'it',
                            'url': '#',
                            'label': 'Information Technology'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'manage_profile',
                            'url': '#',
                            'label': 'Manage your Profile'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'brand_strategy',
                            'url': '#',
                            'label': 'Brand Strategy'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'employee_health',
                            'url': '#',
                            'label': 'Employee Health'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'enterprise_learning',
                            'url': '#',
                            'label': 'Enterprise Learning'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'uk_health_wellness',
                            'url': '#',
                            'label': 'UK Health & Wellness'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'uk_healthcare_star_program',
                            'url': '#',
                            'label': 'UK Healthcare STAR Program'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'uk_hr',
                            'url': '#',
                            'label': 'UK Human Resources'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'link_blue',
                            'url': '#',
                            'label': 'Link Blue'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'uk_med_services',
                            'url': '#',
                            'label': 'UK Medical Services'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'dept_phone',
                            'url': '#',
                            'label': 'Deptartment Phone Directory'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'quality_safety',
                            'url': '#',
                            'label': 'Quality & Safety'
                        },
                        {
                            'parent': 'employee_resources',
                            'id': 'employee_contact',
                            'url': '#',
                            'label': 'Contact Us'
                        },
                    ],
                },
                {
                    'parent': 'provider_resources',
                    'id': 'research',
                    'url': '#',
                    'label': 'Research',
                    'subnav': [
                        {
                            'parent': 'research',
                            'id': 'clinical_research',
                            'url': '#',
                            'label': 'Clinical Research Studies'
                        },
                        {
                            'parent': 'research',
                            'id': 'cancer_clinical',
                            'label': 'Cancer Clinical Trials',
                            'url': '#'
                        },
                        {
                            'parent': 'research',
                            'id': 'videos',
                            'label': 'Videos',
                            'url': '#'
                        }]
                },
                {
                    'parent': 'provider_resources',
                    'id': 'advanced_practice',
                    'url': '#',
                    'label': 'Advanced Practice Providers',
                    'subnav': [
                        {
                            'parent': 'advanced_practice',
                            'id': 'announcements',
                            'url': '#',
                            'label': 'Announcements'
                        },
                        {
                            'parent': 'advanced_practice',
                            'id': 'directory',
                            'label': 'Directory',
                            'url': '#'
                        },
                        {
                            'parent': 'advanced_practice',
                            'id': 'resources',
                            'label': 'Resources',
                            'url': '#'
                        }]
                },
                {
                    'parent': 'provider_presources',
                    'id': 'bioethics',
                    'label': 'Bioethics',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'emergency_transport',
                    'label': 'Emergency Transport',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'ce_central',
                    'label': 'Continuing Medical Education (CECentral)',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'ky_rec',
                    'label': 'Kentucky REC',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'physician_liaison',
                    'label': 'Physician Liaison Program',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'med_contact_center',
                    'label': 'UK MDs Medical Contact Center',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'affil_networks',
                    'label': 'Affiliate Networks',
                    'url': '#'
                },
                {
                    'parent': 'provider_presources',
                    'id': 'employment',
                    'label': 'Employment',
                    'url': '#'
                },
            ],
        },
        {
            'id': 'nursing',
            'url': '#',
            'label': 'Provider Resources',
            'subnav': [
                {
                    'parent': 'nursing',
                    'id': 'mission_vision',
                    'url': '#',
                    'label': 'Mission/Vision',
                },
                {
                    'parent': 'nursing',
                    'id': 'leadership',
                    'url': '#',
                    'label': 'Leadership',
                },
                {
                    'parent': 'nursing',
                    'id': 'nursing_contact',
                    'url': '#',
                    'label': 'Contact',
                },
                {
                    'parent': 'nursing',
                    'id': 'nursing_employment',
                    'url': '#',
                    'label': 'Employment',
                    'subnav': [
                        {
                            'parent': 'nursing_employment',
                            'id': 'nursing_jobs',
                            'url': '#',
                            'label': 'Job Listings',
                        },
                        {
                            'parent': 'nursing_employment',
                            'id': 'nursing_recruitment',
                            'url': '#',
                            'label': 'Nurse Recruitment',
                        },
                        {
                            'parent': 'nursing_employment',
                            'id': 'nursing_application',
                            'url': '#',
                            'label': 'Application',
                        },
                        {
                            'parent': 'nursing_employment',
                            'id': 'nursing_apply',
                            'url': '#',
                            'label': 'Apply Now',
                        },
                        {
                            'parent': 'nursing_employment',
                            'id': 'eastern_st_employment',
                            'url': '#',
                            'label': 'Employment at Eastern State Hospital',
                        },
                    ]
                },
                {
                    'parent': 'nursing',
                    'id': 'nurse_education',
                    'url': '#',
                    'label': 'Education',
                    'subnav': [
                        {
                            'parent': 'nurse_education',
                            'id': 'nurse_residency',
                            'url': '#',
                            'label': 'Nurse Residency Program',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'nurse_college',
                            'url': '#',
                            'label': 'College of Nursing',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'nurse_continuing_ed',
                            'url': '#',
                            'label': 'Continuing Nursing Education',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'nurse_faculty_orientation',
                            'url': '#',
                            'label': 'Nursing Faculty Orientation',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'nurse_staff_dev',
                            'url': '#',
                            'label': 'Nursing Staff Development',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'perceptorship',
                            'url': '#',
                            'label': 'Preceptorship Program',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'rn_internships',
                            'url': '#',
                            'label': 'Registered Nurse (RN) Internships',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'nurse_scholarships',
                            'url': '#',
                            'label': 'Nursing Scholarships',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'snap',
                            'url': '#',
                            'label': 'Student Nurse Academic Practicum (SNAP)',
                        },
                        {
                            'parent': 'nurse_education',
                            'id': 'tuition_reimbursement',
                            'url': '#',
                            'label': 'Tuition Reimbursement',
                        },
                    ]
                },
                {
                    'parent': 'nursing',
                    'id': 'patient_care_areas',
                    'url': '#',
                    'label': 'Patient Care Areas',
                    'subnav': [
                        {
                            'parent': 'patient_care_areas',
                            'id': 'acute_care_nursing',
                            'url': '#',
                            'label': 'Acute Care Nursing',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'bhns',
                            'url': '#',
                            'label': 'Behavioral Health Nurse Services',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'central_monitoring_system',
                            'url': '#',
                            'label': 'Central Monitoring System',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'critical_care_nursing',
                            'url': '#',
                            'label': 'Critical Care Nursing',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'ed_trauma',
                            'url': '#',
                            'label': 'ED and Trauma Nursing Services',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'maternal_care_area_nursing',
                            'url': '#',
                            'label': 'Maternal Care Area Nursing',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'markey_cancer_nursing',
                            'url': '#',
                            'label': 'Markey Cancer Center Nursing',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'nurse_ky_childrens_hospital',
                            'url': '#',
                            'label': 'Nursing at Kentucky Children\'s Hospital',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'pav_a_nursing',
                            'url': '#',
                            'label': 'Pavilion A Nursing',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'per_diem_nursing_pool',
                            'url': '#',
                            'label': 'Per Diem Nursing Pool',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'perioperative_nursing_services',
                            'url': '#',
                            'label': 'Perioperative Nursing Services',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'rapid_response',
                            'url': '#',
                            'label': 'Rapid Response Nursing Teams',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'nursing_special',
                            'url': '#',
                            'label': 'Nursing Special Services',
                        },
                        {
                            'parent': 'patient_care_areas',
                            'id': 'transplant_nursing',
                            'url': '#',
                            'label': 'Transplant Nursing Services',
                        },
                    ]
                },
                {
                    'parent': 'nursing',
                    'id': 'profesional_practice',
                    'url': '#',
                    'label': 'Professional Practice',
                    'subnav': [
                        {
                            'parent': 'profesional_practice',
                            'id': 'advanced_practice',
                            'url': '#',
                            'label': 'Advanced Practice',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'awards',
                            'url': '#',
                            'label': 'Awards & Honors',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'care_delivery_model',
                            'url': '#',
                            'label': 'Care Delivery Model',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'certs',
                            'url': '#',
                            'label': 'Certifications',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'career_center',
                            'url': '#',
                            'label': 'Career Center',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'clinical_nurse_expert',
                            'url': '#',
                            'label': 'Clinical Nurse Expert',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'community_outreach',
                            'url': '#',
                            'label': 'Community Outreach',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'mission_vision',
                            'url': '#',
                            'label': 'Our Mission, Vision, Values and Philosophy',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'professional_adv',
                            'url': '#',
                            'label': 'Professional Advancement',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'professional_practice',
                            'url': '#',
                            'label': 'Professional Practice Model',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'research',
                            'url': '#',
                            'label': 'Research',
                        },
                        {
                            'parent': 'profesional_practice',
                            'id': 'service_line',
                            'url': '#',
                            'label': 'Service Line Triads',
                        }
                    ]
                },
            ],
        },
        {
            'id': 'patient_resources',
            'url': '#',
            'label': 'Patient Resources',
            'subnav': [
                {
                    'parent': 'patient_resources',
                    'id': 'amenities_resources',
                    'url': '#',
                    'label': 'Amenities & Resources',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'appointment_request',
                    'url': '#',
                    'label': 'Appointment Request',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'become_patient',
                    'url': '#',
                    'label': 'Become a Patient',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'clinical_trials',
                    'url': '#',
                    'label': 'Clinical Trials',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'compliments_complaints',
                    'url': '#',
                    'label': 'Compliments & Complaints',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'find_a_doctor',
                    'url': '#',
                    'label': 'Find a Doctor',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'food_lodging',
                    'url': '#',
                    'label': 'Food & Lodging',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'insurance_billing',
                    'url': '#',
                    'label': 'Insurance & Billing',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'initerpreter_services',
                    'url': '#',
                    'label': 'Interpreter Services',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'maps_directions',
                    'url': '#',
                    'label': 'Maps & Directions',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'medical_records',
                    'url': '#',
                    'label': 'Medical Records',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'office_patient_experiences',
                    'url': '#',
                    'label': 'Office of Patient Experience',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'policy',
                    'url': '#',
                    'label': 'Policy',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'subscribe_healthmatters',
                    'url': '#',
                    'label': 'Subscribe to HealthMatters',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'thank_nurse',
                    'url': '#',
                    'label': 'Thank a Great Nurse',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'uk_pharmacies',
                    'url': '#',
                    'label': 'UK Pharmacies',
                },
            ],
        },
        {
            'id': 'visitor_resources',
            'url': '#',
            'label': 'Visitor Resources',
            'subnav': [
                {
                    'parent': 'visitor_resources',
                    'id': 'amenities_resources',
                    'url': '#',
                    'label': 'Amenities & Resources A-Z',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'atms',
                    'url': '#',
                    'label': 'ATMs',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'food_lodging',
                    'url': '#',
                    'label': 'Food & Lodging',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'health_information_center',
                    'url': '#',
                    'label': 'Health Information Center',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'internet_access',
                    'url': '#',
                    'label': 'Internet Access & Wifi',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'interpreter_services',
                    'url': '#',
                    'label': 'Interpreter Services',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'mail_egreetings',
                    'url': '#',
                    'label': 'Mail & eGreetings',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'maps_directions',
                    'url': '#',
                    'label': 'Maps & Directions',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'pastoral_care',
                    'url': '#',
                    'label': 'Pastoral Care',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'patients_condition_number',
                    'url': '#',
                    'label': 'Patients Condition & Phone Number',
                }
            ],
        },
        {
            'id': 'locations',
            'url': '#',
            'label': 'Locations'
        },
        {
            'id': 'research',
            'url': '#',
            'label': 'Research',
            'subnav': [
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'All Research',
                    'id': 'all_research'
                },
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'Clinical Trials',
                    'id': 'clinical_trials'
                },
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'Cancer Researcher Directory',
                    'id': 'cancer_researcher_directory'
                },
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'Research Centers',
                    'id': 'research_centers'
                },
            ],
        },
        {
            'id': 'about',
            'url': '#',
            'label': 'About',
            'subnav': [
                {
                    'id': 'all_research',
                    'url': '#',
                    'label': 'All Research',
                    'parent': 'about'
                },
                {
                    'id': 'advanced_medicine',
                    'url': '#',
                    'label': 'Advanced Medicine',
                    'parent': 'about'
                },
                {
                    'id': 'awards_recognitions',
                    'url': '#',
                    'label': 'Awards & Recognitions',
                    'parent': 'about'
                },
                {
                    'id': 'best_doctors',
                    'url': '#',
                    'label': 'Best Doctors in America',
                    'parent': 'about'
                },
                {
                    'id': 'community_support',
                    'url': '#',
                    'label': 'Community Support',
                    'parent': 'about',
                    'subnav': [
                        {
                            'id': 'cooperative_extension_service',
                            'url': '#',
                            'label': 'Cooperative Extension Service'
                        },
                    ]
                },
                {
                    'id': 'directory',
                    'url': '#',
                    'label': 'Directory',
                    'parent': 'about'
                },
                {
                    'id': 'employment',
                    'url': '#',
                    'label': 'Employment',
                    'parent': 'about'
                },
                {
                    'id': 'leadership',
                    'url': '#',
                    'label': 'Leadership',
                    'parent': 'about'
                },
                {
                    'id': 'making_a_difference',
                    'url': '#',
                    'label': 'Making a Difference',
                    'parent': 'about'
                },
                {
                    'id': 'office_opioid_safety',
                    'url': '#',
                    'label': 'Office of Opioid Safety',
                    'parent': 'about'
                },
                {
                    'id': 'quality_safety',
                    'url': '#',
                    'label': 'Quality & Safety',
                    'parent': 'about'
                },
                {
                    'id': 'strategic_plan',
                    'url': '#',
                    'label': 'Strategic Plan',
                    'parent': 'about'
                },
                {
                    'id': 'arts_in_healthcare',
                    'url': '#',
                    'label': 'Arts in Healthcare',
                    'parent': 'about',
                    'subnav': []
                },
                {
                    'id': 'volunteer_or_observe',
                    'url': '#',
                    'label': 'Volunteer or Observe',
                    'parent': 'about',
                    'subnav': []
                },
                {
                    'id': 'dietetics_internship',
                    'url': '#',
                    'label': 'Dietetics Internship',
                    'parent': 'about'
                },
                {
                    'id': 'news',
                    'url': '#',
                    'label': 'News',
                    'parent': 'about'
                },
            ],
        },
        {
            'id': 'contact',
            'url': '#',
            'label': 'Contact'
        },
        {
            'id': 'give_now',
            'url': '#',
            'label': 'Give Now'
        },
    ]
};
