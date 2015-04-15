var React = require('react');
var {Link} = require('react-router');

var Common = require('../utils/common');

module.exports = React.createClass({
    displayName: 'AffixFull',
    mixins: [Common],
    componentDidMount: function(){
        var $this = this;
        $this.toggleTile();
    },
    resetTile: function(){
        $('.tile-collapse.active').each(function(index) {
            var $collapse = $('.tile-active-show', $(this));
            if (!$collapse.hasClass('tile-active-show-still')) {
                $collapse.collapse('hide');
            };
        });
    },
    toggleTile: function(){
        var $this = this;
        $(document).on('click', function(e) {
            var $target = $(e.target);

            if ($target.is('[data-toggle="tile"], [data-toggle="tile"] *') && !$target.is('[data-ignore="tile"], [data-ignore="tile"] *')) {
                var $trigger = $target.closest('[data-toggle="tile"]');
                if ($trigger.attr('data-parent') != null) {
                    $($trigger.attr('data-parent')).find('.tile-active-show').collapse('hide');
                };
                $(getTargetFromTrigger($trigger)).collapse('toggle');
            } else if ($target.is('[data-dismiss="tile"]')) {
                $target.closest('.tile-collapse').find('.tile-active-show').collapse('hide');
            } else if (!$target.is('.tile-collapse, .tile-collapse *')) {
                $this.resetTile();
            };
        });

        $(document).on('hide.bs.collapse', '.tile-active-show', function() {
            $(this).closest('.tile-collapse').removeClass('active');
        });

    // tile show
        $(document).on('show.bs.collapse', '.tile-active-show', function() {
            $(this).closest('.tile-collapse').addClass('active');
        });
    },
    render: function(){
        return (
            <div className="content">
                <div className="content-heading">
                    <div className="container container-full">
                        <h1 className="heading">Full-Width Page <small>with fixed LHC/RHC</small></h1>
                    </div>
                </div>
                <div className="content-inner">
                    <div className="container container-full">
                        <div className="row row-fix">
                            <div className="col-md-3 content-fix">
                                <div className="content-fix-scroll">
                                    <div className="content-fix-wrap">
                                        <div className="content-fix-inner">
                                            <h2 className="content-sub-heading">LHC</h2>
                                            <ul>
                                                <li>Fusce accumsan nisl quis sodales scelerisque.</li>
                                                <li>Integer ultrices lectus a semper faucibus.</li>
                                                <li>Maecenas ultrices nulla pharetra, pharetra metus vitae, laoreet eros.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="content-sub-heading">Main Content</h2>
                                <p>Pellentesque sed gravida mi. Nam mollis sem ac mollis posuere. Curabitur viverra ultrices velit, vel feugiat dolor ullamcorper at. In nec pulvinar felis, ac faucibus purus. Quisque vehicula tincidunt suscipit. Aenean tincidunt ultricies sapien vel sagittis. Sed risus neque, tristique vel lorem dignissim, rhoncus ultricies arcu. Morbi fringilla massa ipsum. Mauris vel tellus dapibus, lacinia ipsum sit amet, pharetra ipsum. In hac habitasse platea dictumst. Ut eget fringilla nulla. Proin non rutrum ipsum. Ut eu dapibus sem. Aenean eget metus semper, ultrices libero vitae, luctus nibh. Nam ultricies interdum feugiat. Vivamus non nisi vitae neque facilisis consectetur.</p>
                                <p>Mauris congue commodo erat, sed tempus sapien facilisis in. Phasellus maximus nunc purus, et pulvinar ex volutpat quis. Maecenas velit tortor, elementum in placerat ut, feugiat id lectus. Donec vel erat sit amet justo porta lobortis nec a ligula. Curabitur ornare cursus est, non mollis elit molestie non. Nam id sapien fermentum enim vehicula mollis eget id elit. Fusce rutrum lobortis suscipit. Mauris consectetur sagittis lorem. Vestibulum pellentesque ultricies quam. In vehicula arcu et sodales eleifend. Aliquam erat volutpat. Praesent vitae vulputate felis. Aenean interdum nulla quis ipsum convallis, scelerisque cursus leo iaculis. Phasellus in ex ac velit vehicula tempus. Nunc feugiat facilisis consectetur.</p>
                                <p>In nec odio orci. Morbi dictum, nunc vitae congue condimentum, tortor nibh tincidunt nibh, in bibendum felis dui eget orci. Maecenas at leo lorem. Nam eu ligula vel ante ornare dictum et et tellus. Phasellus fringilla felis in libero rutrum vehicula. Donec orci velit, interdum vitae mi ut, imperdiet tincidunt ipsum. Praesent quis placerat turpis. Sed et bibendum turpis. Maecenas consectetur orci vitae dignissim laoreet. Morbi lacinia rutrum ipsum condimentum viverra. Duis nec felis quis purus efficitur dignissim. Nullam porta, tortor vitae consequat luctus, felis tortor tristique leo, vel tincidunt quam turpis a tortor. Nullam pretium risus maximus augue dignissim luctus. Maecenas fermentum accumsan feugiat.</p>
                                <p>Phasellus pulvinar urna in tortor eleifend, vel vehicula urna pulvinar. Integer rhoncus ex eu tellus aliquam posuere. Integer quis sapien scelerisque, ornare arcu pulvinar, luctus est. Morbi vel leo faucibus lacus egestas congue. Donec vitae suscipit est. Donec nec lacus sed nisl rutrum tempor eget et leo. Donec quis elit tincidunt, ultricies ante et, condimentum augue. Sed sit amet imperdiet sapien. Sed purus risus, euismod ac est posuere, aliquet efficitur arcu. Quisque finibus consectetur mi eget dictum. Morbi rutrum elit ultricies magna tempor rhoncus. Nunc sollicitudin, augue et ultrices bibendum, quam sem ultricies elit, eget tincidunt ex augue a arcu. Vestibulum in urna sodales, viverra est at, fermentum libero. Donec non gravida metus. Fusce auctor varius tristique.</p>
                                <p>Praesent at ex quis arcu finibus condimentum id quis lorem. Etiam suscipit nibh eget hendrerit laoreet. Aliquam accumsan sagittis augue ut efficitur. Duis eu pulvinar nisl. Fusce commodo leo sit amet ante faucibus porttitor. Pellentesque blandit, erat sit amet condimentum volutpat, justo massa euismod augue, eget ultricies ex felis sed odio. Aliquam blandit, ante sit amet ultricies euismod, metus leo mattis est, eu volutpat est nunc eu lorem. Sed lacus mi, vulputate et leo sed, lobortis porta est. Sed pharetra id massa a luctus. Curabitur enim magna, imperdiet in mauris luctus, mattis bibendum dui. Nulla massa neque, vehicula ac nisi vitae, luctus egestas ipsum. Vivamus sagittis leo nec tellus tempus convallis. Phasellus et orci euismod, egestas neque eu, suscipit nunc.</p>
                                <p>Aenean sagittis odio vitae gravida cursus. Donec libero enim, pharetra sed pretium vel, imperdiet suscipit leo. Curabitur non augue enim. Aliquam erat volutpat. Mauris mollis sapien elit, vitae imperdiet arcu ultrices eget. In et magna eget nisi pretium viverra. Nam lobortis gravida risus, non pulvinar lacus pulvinar vel.</p>
                                <p>Duis sed lobortis sapien. Mauris vitae purus a nibh auctor rhoncus. Vestibulum sed orci condimentum, mollis lacus ut, sagittis erat. Nulla bibendum tellus ut rutrum vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ut libero cursus, blandit sapien in, faucibus nunc. Duis sem sem, imperdiet vitae gravida ornare, rhoncus eget risus. Phasellus pharetra vel arcu nec elementum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut pharetra sollicitudin orci, ac tincidunt nisl mattis quis. Vestibulum elementum id erat ac elementum. Aliquam non volutpat diam.</p>
                                <p>Aenean commodo eleifend metus in condimentum. Duis imperdiet quam vel nunc egestas, non sodales augue facilisis. Duis tincidunt vel nulla et posuere. Integer viverra laoreet mi ac placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tortor eu magna molestie facilisis ut vel libero. Ut sit amet rutrum turpis. Mauris suscipit eros sem, in gravida dui accumsan et. Aliquam imperdiet tellus condimentum odio viverra malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum porttitor non enim in rhoncus. Vivamus elementum convallis tempus. Sed ultricies mattis mi ut pellentesque. Duis pellentesque, neque scelerisque imperdiet aliquet, leo mauris dignissim felis, et vehicula sapien ante ac quam. Aenean accumsan libero eros, at fringilla massa suscipit vel. Nullam condimentum ante sit amet posuere condimentum.</p>
                                <p>Nunc sed nunc nec dolor cursus pretium. Nulla malesuada efficitur est, eu convallis quam mattis a. Donec vel varius lectus, sed placerat augue. Nunc tristique, elit sit amet tempor interdum, nisi augue lacinia massa, ut venenatis arcu nisl sit amet elit. Praesent laoreet lacus lectus, sed sagittis diam porttitor ut. Sed metus diam, suscipit a tortor finibus, feugiat elementum sem. Nulla sed ornare lectus. Nam id mollis turpis, at consectetur lectus. Nunc in massa sit amet neque dictum egestas sit amet nec elit. Suspendisse semper tincidunt sapien, non gravida sapien tempor nec. Vivamus venenatis purus et ante efficitur laoreet. Suspendisse tempus velit a magna sagittis scelerisque et vitae diam. Donec cursus egestas nisl at pharetra. Donec a justo quis lectus venenatis accumsan sed et lacus. Nunc imperdiet aliquet lacus, ac ornare nisl gravida a.</p>
                                <p>Cras semper lorem mauris, sed pretium massa eleifend id. Ut dolor quam, rhoncus quis velit quis, facilisis gravida eros. Donec non vehicula mauris, et scelerisque arcu. Suspendisse mollis risus eget arcu congue, dignissim molestie neque ullamcorper. Proin at bibendum risus. Integer laoreet dictum nunc eu porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec augue mauris, euismod eu nulla eu, elementum consequat arcu. Vivamus diam eros, lobortis ut metus at, ullamcorper porta nisl. Morbi ac nibh pretium, facilisis metus vitae, maximus arcu. Praesent vulputate convallis ante, non consequat purus suscipit quis. Maecenas molestie orci pulvinar enim faucibus, eget suscipit dui mattis.</p>
                                <p>Maecenas scelerisque erat magna, nec euismod tortor imperdiet eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent dignissim a lorem id blandit. Phasellus a tincidunt nulla. Suspendisse molestie, elit nec venenatis venenatis, urna lorem dictum ex, non viverra ipsum diam non risus. Praesent et mauris vehicula, eleifend mi et, hendrerit nulla. Integer in mi nec arcu semper consequat. Donec eu enim cursus, vestibulum arcu sed, tristique turpis. Donec rutrum turpis in sem sodales, at lacinia tellus luctus. Aliquam pretium euismod magna.</p>
                                <p>Phasellus at congue quam. Donec id ex consequat, posuere odio commodo, aliquet ante. Curabitur odio tortor, ornare eu purus quis, sollicitudin accumsan magna. Donec quis nisi vestibulum nisi vestibulum porttitor. In congue dui non justo hendrerit, id bibendum ligula semper. Aenean vestibulum vulputate dui, lobortis luctus risus ultricies ut. In vel odio convallis, dapibus metus vitae, ultrices velit. Integer iaculis, velit a molestie sagittis, risus sem tincidunt metus, nec placerat purus nunc quis nisl. Morbi id rhoncus tortor. Nullam lacinia ante non ipsum consectetur, at volutpat felis condimentum. Quisque tempor nisl imperdiet sagittis venenatis.</p>
                                <p>Suspendisse eget arcu vitae metus sagittis dapibus. Phasellus quis tortor magna. Mauris non nulla tortor. Ut ut condimentum est, vitae commodo diam. Aenean porta rhoncus orci, ornare pulvinar lectus gravida et. Cras consequat risus sit amet ligula congue, vel scelerisque sem rutrum. Donec pharetra sapien vitae mauris vulputate, non porttitor est consequat. Quisque nec rutrum dolor. Fusce placerat, enim id faucibus dapibus, arcu mauris ullamcorper dolor, tempor elementum velit dui vel elit. Sed fermentum porta vestibulum. Nulla molestie, justo ac lacinia viverra, turpis turpis pharetra nunc, vitae dignissim ligula purus eu sem. Ut vitae eros nisl. Nulla risus leo, aliquet quis auctor ut, interdum ac ante.</p>
                                <p>Aenean semper massa sed ex laoreet, ut pretium ex dignissim. Maecenas quis lectus rutrum, egestas quam porttitor, tincidunt erat. In hac habitasse platea dictumst. Fusce pulvinar mauris ut lectus fermentum scelerisque. Sed nisl ex, accumsan vel dapibus sed, posuere dictum tortor. Suspendisse condimentum neque eu quam dignissim, non molestie enim vestibulum. Aenean dictum molestie dolor, eget tincidunt lectus blandit id. Proin nisl erat, facilisis eu ligula sodales, euismod congue urna. Aliquam odio tortor, fermentum sed nulla vitae, congue aliquet justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nunc eros, egestas quis luctus vitae, iaculis ac libero. Donec non urna et erat pharetra semper ac sit amet orci. Sed finibus commodo purus, a pellentesque mauris varius id. Vestibulum convallis, diam non commodo dictum, elit erat ullamcorper risus, a venenatis nulla leo id lectus. Quisque finibus lorem sit amet ipsum rutrum, rutrum tincidunt lacus laoreet.</p>
                                <p>Fusce vestibulum magna eu egestas congue. Fusce eu pretium turpis. Nulla sit amet aliquam eros, id molestie ligula. Duis consectetur turpis at nibh tristique, a ornare nisi scelerisque. Suspendisse massa tortor, posuere ac congue in, aliquam in lorem. Curabitur cursus, nulla vitae ultricies tincidunt, nisi felis porta nulla, at scelerisque quam metus eget tortor. Morbi erat magna, venenatis vitae mauris sit amet, hendrerit tempus enim. Suspendisse potenti. Vivamus sed urna aliquet, eleifend velit et, faucibus ligula. Maecenas feugiat elementum nulla sed ullamcorper. Aliquam metus neque, vulputate id ante nec, finibus pharetra felis.</p>
                                <p>Duis vel volutpat metus. Nunc dapibus pharetra ante, in efficitur leo consectetur id. Etiam eu lectus ut felis dictum lobortis eget ut lorem. Pellentesque volutpat nibh et nisl pellentesque, non convallis urna euismod. Suspendisse id condimentum arcu. Ut finibus quam et nibh rutrum mattis id ac magna. Etiam ac laoreet justo. Ut mollis vulputate ante placerat facilisis. Phasellus molestie porttitor vulputate. Integer pulvinar nulla id tellus iaculis facilisis. Morbi et augue mi. Nullam ac ipsum dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris lobortis purus nec nisl pellentesque ullamcorper ac in diam. Sed non facilisis nunc. Integer egestas viverra tortor sed eleifend.</p>
                                <p>Quisque quis nulla pulvinar, sagittis lectus in, congue purus. Suspendisse interdum lacinia suscipit. Vestibulum quis ex eu leo imperdiet porttitor. Vestibulum lobortis sagittis sapien, non suscipit nunc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam non nunc ligula. Nam vitae faucibus odio. Proin varius ipsum egestas, malesuada odio in, bibendum purus. Cras tincidunt porttitor ligula, sed ullamcorper nisl finibus in. Sed lobortis lectus eu ligula blandit, sit amet laoreet orci elementum. Sed ut ultricies sem. Maecenas metus libero, aliquam vitae mi luctus, pulvinar ultrices nisl. Donec condimentum varius odio, ut pretium arcu ultricies eget.</p>
                                <p>Nullam egestas pharetra odio, ac egestas ex porttitor id. Vivamus tellus ipsum, vehicula non accumsan ac, iaculis tristique arcu. Nunc ullamcorper blandit massa eget vehicula. Cras enim orci, volutpat eget ante quis, dapibus elementum purus. Suspendisse vel risus quis nisl porttitor ultricies vel sed nisi. Donec sed erat a erat gravida lacinia. Sed ornare, velit a congue pharetra, nunc libero ornare lorem, ac accumsan sem mi ut est. Phasellus et imperdiet lacus, in ornare lacus.</p>
                                <p>Pellentesque id erat ut nulla malesuada maximus sed ac nibh. Aenean maximus turpis vel eros placerat, id bibendum elit scelerisque. Phasellus nunc erat, fermentum eget dolor sed, tempus ultricies libero. Nunc efficitur pharetra dui nec pellentesque. Pellentesque laoreet rutrum eros et tincidunt. Nulla ac mi sit amet erat convallis viverra eget ac purus. Aliquam nunc nisi, varius at arcu eget, euismod lobortis odio. Morbi eleifend sapien velit, quis tincidunt enim ultricies dapibus. Duis at egestas turpis. Pellentesque imperdiet sem felis, at rhoncus libero iaculis vitae. Vivamus quam nibh, euismod id mattis vel, tristique vitae odio. Pellentesque non ullamcorper velit. Duis quis neque tortor.</p>
                                <p>Duis eros ipsum, dictum non turpis quis, aliquam auctor leo. Nulla vitae volutpat neque, vitae lobortis ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras finibus metus id tortor interdum, ac ultrices est pharetra. Nulla scelerisque auctor vestibulum. Aliquam erat volutpat. Phasellus sed consequat tellus. Integer ac eros nec enim lacinia faucibus id quis ipsum. In varius congue porta. Maecenas eu metus vulputate, lacinia erat eu, consectetur arcu. Aliquam sed luctus dui. Etiam id est suscipit, facilisis augue id, aliquet purus.</p>
                                <p>Sed tortor lectus, tincidunt quis fermentum et, pellentesque rhoncus eros. Quisque at diam eu dui ultricies cursus id eu lacus. Maecenas nulla augue, sollicitudin eu vulputate ut, lacinia sit amet orci. Pellentesque at elit nulla. Nulla vel volutpat nibh. Praesent convallis placerat massa vitae rhoncus. Morbi arcu ante, egestas blandit diam vitae, tempor viverra risus. Maecenas non vehicula libero. Proin vitae mollis erat. Duis finibus felis sit amet ligula vehicula, a placerat nisi lacinia.</p>
                                <p>Curabitur et porta ligula. Donec vehicula arcu a volutpat consectetur. Aliquam in leo vitae lorem vulputate tempus. Aliquam erat volutpat. Cras ipsum arcu, malesuada non est non, laoreet maximus eros. Sed vel convallis augue. Sed tristique laoreet nisl, et bibendum nibh auctor congue. Duis malesuada libero neque, at dignissim enim posuere sed. Proin in erat eros.</p>
                            </div>
                            <div className="col-md-3 content-fix">
                                <div className="content-fix-scroll">
                                    <div className="content-fix-wrap">
                                        <div className="content-fix-inner">
                                            <h2 className="content-sub-heading">RHC</h2>
                                            <div className="tile-wrap">
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>lorem</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>consectetur</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>sed</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>lorem</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>consectetur</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>sed</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>lorem</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>consectetur</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>sed</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>lorem</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>consectetur</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>sed</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>lorem</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>consectetur</span>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <div className="pull-left tile-side">
                                                        <span className="icon icon-chevron-right"></span>
                                                    </div>
                                                    <div className="tile-inner">
                                                        <span>sed</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})
