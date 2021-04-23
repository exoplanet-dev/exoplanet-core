window.BENCHMARK_DATA = {
  "lastUpdate": 1619181790023,
  "repoUrl": "https://github.com/exoplanet-dev/exoplanet-core",
  "entries": {
    "Op performance": [
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "bdf100acc27698104142b47fe71fc9228b8229cc",
          "message": "adding benchmarks",
          "timestamp": "2020-12-29T09:25:37-05:00",
          "tree_id": "2982adee77ac8e8cf9970ac8ea431d3b9b9dc912",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/bdf100acc27698104142b47fe71fc9228b8229cc"
        },
        "date": 1609252877419,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 868.2384269912029,
            "unit": "iter/sec",
            "range": "stddev: 0.000002916815947447351",
            "extra": "mean: 1.1517573617023658 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.3361164340438,
            "unit": "iter/sec",
            "range": "stddev: 0.000008154210712074215",
            "extra": "mean: 2.2354555406157153 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1062.636697865938,
            "unit": "iter/sec",
            "range": "stddev: 0.000005320540291065506",
            "extra": "mean: 941.055397398067 usec\nrounds: 999"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 866.3615508678836,
            "unit": "iter/sec",
            "range": "stddev: 0.000003795190254957323",
            "extra": "mean: 1.1542525161674628 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 441.968347110788,
            "unit": "iter/sec",
            "range": "stddev: 0.000008885028937360041",
            "extra": "mean: 2.262605470588894 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.04060822550645,
            "unit": "iter/sec",
            "range": "stddev: 0.00004072579091451334",
            "extra": "mean: 2.702406108333359 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 867.6645219599484,
            "unit": "iter/sec",
            "range": "stddev: 0.000003975274447425427",
            "extra": "mean: 1.152519176122497 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 439.80120407880605,
            "unit": "iter/sec",
            "range": "stddev: 0.00000850180743504934",
            "extra": "mean: 2.273754575307653 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 369.24969640199384,
            "unit": "iter/sec",
            "range": "stddev: 0.000005719136905406957",
            "extra": "mean: 2.708194508334335 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 868.4149102135509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036241934626977406",
            "extra": "mean: 1.1515232963400999 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 437.0844804884616,
            "unit": "iter/sec",
            "range": "stddev: 0.000008225215037102123",
            "extra": "mean: 2.2878872269325483 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 325.45433818403876,
            "unit": "iter/sec",
            "range": "stddev: 0.000008139319042532201",
            "extra": "mean: 3.0726276551720675 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 853.1214047530784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029506572395661644",
            "extra": "mean: 1.1721661119139697 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 437.13247802170304,
            "unit": "iter/sec",
            "range": "stddev: 0.000007262063802060685",
            "extra": "mean: 2.2876360148887205 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 303.8078092404124,
            "unit": "iter/sec",
            "range": "stddev: 0.000006824577019673932",
            "extra": "mean: 3.29155462626265 msec\nrounds: 297"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "46d2f8b7b95e28ec4981e9bf2146989415c2cca3",
          "message": "adding light curve benchmarks",
          "timestamp": "2020-12-29T10:04:58-05:00",
          "tree_id": "af0d499304bb01d103bd4f7b88ffe01175948e4e",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/46d2f8b7b95e28ec4981e9bf2146989415c2cca3"
        },
        "date": 1609254601252,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 864.0247752659224,
            "unit": "iter/sec",
            "range": "stddev: 0.0001574679505541542",
            "extra": "mean: 1.1573742196133534 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 369.3162710950938,
            "unit": "iter/sec",
            "range": "stddev: 0.0003256470804528655",
            "extra": "mean: 2.707706316417654 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 818.3944791602012,
            "unit": "iter/sec",
            "range": "stddev: 0.00017002329919567976",
            "extra": "mean: 1.2219046260260138 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 844.4991279296469,
            "unit": "iter/sec",
            "range": "stddev: 0.00015485182516956913",
            "extra": "mean: 1.1841338456459691 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 363.1235992659697,
            "unit": "iter/sec",
            "range": "stddev: 0.00023405883634377138",
            "extra": "mean: 2.7538832563387063 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 329.6515499599113,
            "unit": "iter/sec",
            "range": "stddev: 0.00026400981612078646",
            "extra": "mean: 3.033506137379331 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 887.1103479547462,
            "unit": "iter/sec",
            "range": "stddev: 0.000121356713483173",
            "extra": "mean: 1.1272554787637452 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 360.18739203628945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002588376680824291",
            "extra": "mean: 2.776332603833197 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 315.7583169365366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006413536828399794",
            "extra": "mean: 3.1669791304372428 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 868.0158631646326,
            "unit": "iter/sec",
            "range": "stddev: 0.00016108854708922168",
            "extra": "mean: 1.152052678339514 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 352.5057384769813,
            "unit": "iter/sec",
            "range": "stddev: 0.0002941037534146643",
            "extra": "mean: 2.8368332507735903 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 286.85343315676243,
            "unit": "iter/sec",
            "range": "stddev: 0.0003561566598194741",
            "extra": "mean: 3.486100859924205 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 818.6621256528174,
            "unit": "iter/sec",
            "range": "stddev: 0.00011765545138762596",
            "extra": "mean: 1.2215051468303606 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 355.7174642775228,
            "unit": "iter/sec",
            "range": "stddev: 0.00014175104400268186",
            "extra": "mean: 2.8112198596463127 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 250.44669007175213,
            "unit": "iter/sec",
            "range": "stddev: 0.000585021780478381",
            "extra": "mean: 3.992865706124938 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1114.3586858650247,
            "unit": "iter/sec",
            "range": "stddev: 0.0001656483336229314",
            "extra": "mean: 897.3771306172811 usec\nrounds: 957"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1029.025526249688,
            "unit": "iter/sec",
            "range": "stddev: 0.00014191128142901422",
            "extra": "mean: 971.7931912190047 usec\nrounds: 1025"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 499.2583863241256,
            "unit": "iter/sec",
            "range": "stddev: 0.0001799216126752742",
            "extra": "mean: 2.0029708611660375 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 703.941065249553,
            "unit": "iter/sec",
            "range": "stddev: 0.00015243515032033436",
            "extra": "mean: 1.4205734675323871 msec\nrounds: 616"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 955.2641654650466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003236801292266454",
            "extra": "mean: 1.0468308517709075 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 843.0405860843451,
            "unit": "iter/sec",
            "range": "stddev: 0.00009753564946917766",
            "extra": "mean: 1.186182511858274 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 460.82249797498366,
            "unit": "iter/sec",
            "range": "stddev: 0.00019895080115848153",
            "extra": "mean: 2.1700329397856053 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 543.6604470223106,
            "unit": "iter/sec",
            "range": "stddev: 0.00017251541680656911",
            "extra": "mean: 1.8393833972603901 msec\nrounds: 584"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 656.2673092711191,
            "unit": "iter/sec",
            "range": "stddev: 0.00025716537572178204",
            "extra": "mean: 1.5237693328205641 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 627.4970974692901,
            "unit": "iter/sec",
            "range": "stddev: 0.00015067414093209187",
            "extra": "mean: 1.5936328694316237 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 372.17106574209146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003738085754661954",
            "extra": "mean: 2.6869364441484653 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 482.7316253594007,
            "unit": "iter/sec",
            "range": "stddev: 0.00014170153915190456",
            "extra": "mean: 2.0715444099099276 msec\nrounds: 222"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "952fd030a2e4ba8f12dfa51e69ea8d1e9f62cfa3",
          "message": "add link to readme",
          "timestamp": "2020-12-29T10:07:10-05:00",
          "tree_id": "c14fe677e5e573d81b92b70e450498625b619ca7",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/952fd030a2e4ba8f12dfa51e69ea8d1e9f62cfa3"
        },
        "date": 1609255204906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 845.3736361498997,
            "unit": "iter/sec",
            "range": "stddev: 0.0001346529975257245",
            "extra": "mean: 1.182908902333787 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 453.2078664237411,
            "unit": "iter/sec",
            "range": "stddev: 0.00024074290524262783",
            "extra": "mean: 2.2064930335190125 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1025.3020031500566,
            "unit": "iter/sec",
            "range": "stddev: 0.00010967396999342136",
            "extra": "mean: 975.3223898204425 usec\nrounds: 885"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 863.3125253594877,
            "unit": "iter/sec",
            "range": "stddev: 0.00013595747226624523",
            "extra": "mean: 1.1583290762329608 msec\nrounds: 774"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 450.9362169435384,
            "unit": "iter/sec",
            "range": "stddev: 0.00021798598403232827",
            "extra": "mean: 2.2176085273833963 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 362.69193158131503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002553602939606323",
            "extra": "mean: 2.757160865531417 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 848.9082144076393,
            "unit": "iter/sec",
            "range": "stddev: 0.00012459873385309015",
            "extra": "mean: 1.1779836536247812 msec\nrounds: 895"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 425.8061574303344,
            "unit": "iter/sec",
            "range": "stddev: 0.00020013595880397385",
            "extra": "mean: 2.3484864710149442 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 359.2160492305496,
            "unit": "iter/sec",
            "range": "stddev: 0.00023243266242966912",
            "extra": "mean: 2.7838399819329536 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 846.9313619494615,
            "unit": "iter/sec",
            "range": "stddev: 0.00012158289810342908",
            "extra": "mean: 1.1807332269502997 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 422.11112156728984,
            "unit": "iter/sec",
            "range": "stddev: 0.00021724946872948728",
            "extra": "mean: 2.3690444267069313 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 312.8017281694297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118314158553167",
            "extra": "mean: 3.196913283862511 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 833.1440878209405,
            "unit": "iter/sec",
            "range": "stddev: 0.00013254783843428384",
            "extra": "mean: 1.2002725754382597 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 407.15005495894343,
            "unit": "iter/sec",
            "range": "stddev: 0.00014899053947952897",
            "extra": "mean: 2.456096929916512 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 288.4648251549838,
            "unit": "iter/sec",
            "range": "stddev: 0.0002919552220752106",
            "extra": "mean: 3.466627168365255 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1294.7528251231836,
            "unit": "iter/sec",
            "range": "stddev: 0.00007991486147042717",
            "extra": "mean: 772.3481892421122 usec\nrounds: 930"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1076.8460540467386,
            "unit": "iter/sec",
            "range": "stddev: 0.000079463606487192",
            "extra": "mean: 928.6378459038276 usec\nrounds: 967"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 649.5142613634022,
            "unit": "iter/sec",
            "range": "stddev: 0.00014071388274295693",
            "extra": "mean: 1.5396120754929838 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 766.0899856368942,
            "unit": "iter/sec",
            "range": "stddev: 0.0001392989828190673",
            "extra": "mean: 1.3053296854789758 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1032.4841844098733,
            "unit": "iter/sec",
            "range": "stddev: 0.00012768382699080143",
            "extra": "mean: 968.5378382542102 usec\nrounds: 847"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 908.4884021598884,
            "unit": "iter/sec",
            "range": "stddev: 0.00009312718889553144",
            "extra": "mean: 1.100729516879409 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 593.0980443663121,
            "unit": "iter/sec",
            "range": "stddev: 0.0001711818649846326",
            "extra": "mean: 1.6860618737470918 msec\nrounds: 602"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 610.9053480450575,
            "unit": "iter/sec",
            "range": "stddev: 0.00016936109065975418",
            "extra": "mean: 1.6369147908101875 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 743.9985034785893,
            "unit": "iter/sec",
            "range": "stddev: 0.0001530615801028545",
            "extra": "mean: 1.3440887250773585 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 690.6959767767434,
            "unit": "iter/sec",
            "range": "stddev: 0.00014264673656504893",
            "extra": "mean: 1.4478150063457433 msec\nrounds: 632"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 476.1864812784875,
            "unit": "iter/sec",
            "range": "stddev: 0.00018949252727611742",
            "extra": "mean: 2.1000176177096703 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 544.4643946542311,
            "unit": "iter/sec",
            "range": "stddev: 0.0001650921500842769",
            "extra": "mean: 1.8366673924289618 msec\nrounds: 502"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "77897cb64aaeacffafd5f38a3bc65b2f401bceb7",
          "message": "benchmark groups",
          "timestamp": "2020-12-29T11:00:11-05:00",
          "tree_id": "489390d2f5759c7371e2e959be1f576ae4f4d6f1",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/77897cb64aaeacffafd5f38a3bc65b2f401bceb7"
        },
        "date": 1609258029320,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 751.8629280821301,
            "unit": "iter/sec",
            "range": "stddev: 0.00008583358331069592",
            "extra": "mean: 1.3300296671772658 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 388.02332099844693,
            "unit": "iter/sec",
            "range": "stddev: 0.00014382800475871922",
            "extra": "mean: 2.5771646854287984 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 932.4218168917399,
            "unit": "iter/sec",
            "range": "stddev: 0.00007907603901474643",
            "extra": "mean: 1.0724759780219797 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 749.7324441664985,
            "unit": "iter/sec",
            "range": "stddev: 0.00009003897428106414",
            "extra": "mean: 1.3338091578946298 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 386.89927227801434,
            "unit": "iter/sec",
            "range": "stddev: 0.00017543146245322823",
            "extra": "mean: 2.5846520571417093 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 318.3307022795138,
            "unit": "iter/sec",
            "range": "stddev: 0.00015614752642661119",
            "extra": "mean: 3.1413872203942774 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 740.8442603116131,
            "unit": "iter/sec",
            "range": "stddev: 0.00006656838795792279",
            "extra": "mean: 1.3498113619445216 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 378.16349974542237,
            "unit": "iter/sec",
            "range": "stddev: 0.00012305505293240844",
            "extra": "mean: 2.644358857142994 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 330.39524258396074,
            "unit": "iter/sec",
            "range": "stddev: 0.0002070102017916331",
            "extra": "mean: 3.0266779635783583 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 751.0743099891155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000812276908689182",
            "extra": "mean: 1.3314261807390164 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 372.4832905841985,
            "unit": "iter/sec",
            "range": "stddev: 0.0001258153319630816",
            "extra": "mean: 2.6846841865889113 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 277.7876150622106,
            "unit": "iter/sec",
            "range": "stddev: 0.0001353113142639216",
            "extra": "mean: 3.5998725133085934 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 754.2590336493561,
            "unit": "iter/sec",
            "range": "stddev: 0.00010307600216680317",
            "extra": "mean: 1.3258044721873168 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 373.18753760574623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000951529401142791",
            "extra": "mean: 2.6796178843904737 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 269.2239984324133,
            "unit": "iter/sec",
            "range": "stddev: 0.0002538131182853323",
            "extra": "mean: 3.714379126016296 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1163.9252684298115,
            "unit": "iter/sec",
            "range": "stddev: 0.00005501076943267603",
            "extra": "mean: 859.1616894347915 usec\nrounds: 937"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1014.1716862415275,
            "unit": "iter/sec",
            "range": "stddev: 0.00007415375339886663",
            "extra": "mean: 986.0263440265749 usec\nrounds: 904"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 594.1286216688903,
            "unit": "iter/sec",
            "range": "stddev: 0.00012545134302398525",
            "extra": "mean: 1.6831372257256831 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 682.2716322235834,
            "unit": "iter/sec",
            "range": "stddev: 0.00010474574278391542",
            "extra": "mean: 1.4656918927449936 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 980.5278609916171,
            "unit": "iter/sec",
            "range": "stddev: 0.000060425470293745304",
            "extra": "mean: 1.01985883296441 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 852.5112817361384,
            "unit": "iter/sec",
            "range": "stddev: 0.00006417058589216832",
            "extra": "mean: 1.1730050046534295 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 535.7281552537431,
            "unit": "iter/sec",
            "range": "stddev: 0.00013724514249377113",
            "extra": "mean: 1.8666183402781182 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 555.6144047535107,
            "unit": "iter/sec",
            "range": "stddev: 0.00009941000379298533",
            "extra": "mean: 1.799809348794032 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 699.5452742181401,
            "unit": "iter/sec",
            "range": "stddev: 0.00006071867160698537",
            "extra": "mean: 1.4295000436071401 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 635.0350065963421,
            "unit": "iter/sec",
            "range": "stddev: 0.00010178210126495281",
            "extra": "mean: 1.5747163378595388 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 427.0238673264183,
            "unit": "iter/sec",
            "range": "stddev: 0.000140560332008299",
            "extra": "mean: 2.3417894794990395 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 508.9611334145181,
            "unit": "iter/sec",
            "range": "stddev: 0.0001354186113524059",
            "extra": "mean: 1.9647865708157333 msec\nrounds: 466"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "4547fa20881aa8deb4c2e4cb1c5c53b8c86631fa",
          "message": "Update contact point solver using more robust quartic solver",
          "timestamp": "2020-12-29T21:45:05Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/1/commits/4547fa20881aa8deb4c2e4cb1c5c53b8c86631fa"
        },
        "date": 1609353144132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 860.1089159190979,
            "unit": "iter/sec",
            "range": "stddev: 0.000003113162382221216",
            "extra": "mean: 1.1626434530461958 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.129458355614,
            "unit": "iter/sec",
            "range": "stddev: 0.000010681832573553152",
            "extra": "mean: 2.2364887423826887 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1062.8440042137254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052755202312766265",
            "extra": "mean: 940.8718457604546 usec\nrounds: 979"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 859.2684830810207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030282547068013826",
            "extra": "mean: 1.163780610705478 msec\nrounds: 822"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 442.2587697937884,
            "unit": "iter/sec",
            "range": "stddev: 0.000010062295966855214",
            "extra": "mean: 2.261119661835692 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 368.8840292152402,
            "unit": "iter/sec",
            "range": "stddev: 0.00006794174385857212",
            "extra": "mean: 2.710879086111125 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 861.7109785630149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030914980068236135",
            "extra": "mean: 1.1604819073648047 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 439.9998657155961,
            "unit": "iter/sec",
            "range": "stddev: 0.000007969265406085472",
            "extra": "mean: 2.272727966345273 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.7296455186502,
            "unit": "iter/sec",
            "range": "stddev: 0.00001062908675967475",
            "extra": "mean: 2.7120141061438474 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 863.2685936117447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031852515821083026",
            "extra": "mean: 1.1583880236117454 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 435.1040899154768,
            "unit": "iter/sec",
            "range": "stddev: 0.000050813357156432185",
            "extra": "mean: 2.2983006208796146 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 325.24614421086824,
            "unit": "iter/sec",
            "range": "stddev: 0.000006124823882953111",
            "extra": "mean: 3.074594481131391 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 847.987315487967,
            "unit": "iter/sec",
            "range": "stddev: 0.000004107113293062374",
            "extra": "mean: 1.1792629226117122 msec\nrounds: 827"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 437.1515079484637,
            "unit": "iter/sec",
            "range": "stddev: 0.000007644367201390654",
            "extra": "mean: 2.2875364303167203 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 303.4971975947994,
            "unit": "iter/sec",
            "range": "stddev: 0.000011520494688165692",
            "extra": "mean: 3.294923340066899 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1347.6755380985953,
            "unit": "iter/sec",
            "range": "stddev: 0.000021080050199952893",
            "extra": "mean: 742.0183654968444 usec\nrounds: 1026"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1163.7854130391622,
            "unit": "iter/sec",
            "range": "stddev: 0.000003281872419597468",
            "extra": "mean: 859.2649373294296 usec\nrounds: 1101"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 681.2695311088091,
            "unit": "iter/sec",
            "range": "stddev: 0.000007349962404943628",
            "extra": "mean: 1.467847825767926 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 764.6948331704913,
            "unit": "iter/sec",
            "range": "stddev: 0.00001613070656146816",
            "extra": "mean: 1.3077112027211077 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1123.4148970314752,
            "unit": "iter/sec",
            "range": "stddev: 0.00001538437336326991",
            "extra": "mean: 890.1430830607746 usec\nrounds: 915"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 984.110923611584,
            "unit": "iter/sec",
            "range": "stddev: 0.000010576306244597495",
            "extra": "mean: 1.0161456153033084 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 613.0454577049176,
            "unit": "iter/sec",
            "range": "stddev: 0.000007377805798282291",
            "extra": "mean: 1.6312004068079053 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 636.0848754522567,
            "unit": "iter/sec",
            "range": "stddev: 0.000011124756923646017",
            "extra": "mean: 1.5721172418837965 msec\nrounds: 616"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 799.4724645411833,
            "unit": "iter/sec",
            "range": "stddev: 0.0003714996779966862",
            "extra": "mean: 1.2508248180553652 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 723.2699971894469,
            "unit": "iter/sec",
            "range": "stddev: 0.00001291728112503336",
            "extra": "mean: 1.3826095426132667 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 498.6364977891508,
            "unit": "iter/sec",
            "range": "stddev: 0.000008254406358892617",
            "extra": "mean: 2.0054689226195626 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 577.2829857232343,
            "unit": "iter/sec",
            "range": "stddev: 0.000003287001097705818",
            "extra": "mean: 1.7322526814941124 msec\nrounds: 562"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "ca301d6d6fd6181efc72129cf76ebccfd971d30f",
          "message": "adding contact point op and some more tests",
          "timestamp": "2020-12-30T15:14:15-05:00",
          "tree_id": "42ce22d53c7826e6a8fa025b01b4c43ebe103e72",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/ca301d6d6fd6181efc72129cf76ebccfd971d30f"
        },
        "date": 1609359514987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 867.2224706354293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034827643191370946",
            "extra": "mean: 1.1531066523994498 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 450.6359933099398,
            "unit": "iter/sec",
            "range": "stddev: 0.000008303958819565299",
            "extra": "mean: 2.2190859470743987 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1069.9338891926843,
            "unit": "iter/sec",
            "range": "stddev: 0.000006715324759956663",
            "extra": "mean: 934.637186559767 usec\nrounds: 997"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 865.8452769948864,
            "unit": "iter/sec",
            "range": "stddev: 0.000003287690090086539",
            "extra": "mean: 1.154940757395742 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 446.03758847116626,
            "unit": "iter/sec",
            "range": "stddev: 0.00000871852648374182",
            "extra": "mean: 2.2419635157377416 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 368.96002320862453,
            "unit": "iter/sec",
            "range": "stddev: 0.000007143344744878846",
            "extra": "mean: 2.710320731507979 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 867.31526255798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033511507967455893",
            "extra": "mean: 1.1529832843603973 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 444.0898579217778,
            "unit": "iter/sec",
            "range": "stddev: 0.000009019229594218765",
            "extra": "mean: 2.2517965275760488 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 367.75647090501514,
            "unit": "iter/sec",
            "range": "stddev: 0.000006463550129638136",
            "extra": "mean: 2.7191907664849273 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 865.598449001472,
            "unit": "iter/sec",
            "range": "stddev: 0.00003506863242391869",
            "extra": "mean: 1.1552700922160495 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 440.8325422839553,
            "unit": "iter/sec",
            "range": "stddev: 0.00000925886966619784",
            "extra": "mean: 2.2684350724631073 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 323.8184930935413,
            "unit": "iter/sec",
            "range": "stddev: 0.000010748674812575013",
            "extra": "mean: 3.088149754656324 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 853.0162315313447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032551609712298464",
            "extra": "mean: 1.1723106349392536 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 436.70663045347135,
            "unit": "iter/sec",
            "range": "stddev: 0.000033475863615848",
            "extra": "mean: 2.2898667669909454 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 301.76836991429667,
            "unit": "iter/sec",
            "range": "stddev: 0.00005919572782147698",
            "extra": "mean: 3.3137999197331505 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1342.8841716515178,
            "unit": "iter/sec",
            "range": "stddev: 0.0002901893208171222",
            "extra": "mean: 744.6658625592191 usec\nrounds: 1055"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1159.3536542190002,
            "unit": "iter/sec",
            "range": "stddev: 0.00007096858784600657",
            "extra": "mean: 862.5495735152973 usec\nrounds: 1095"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 679.2516653844615,
            "unit": "iter/sec",
            "range": "stddev: 0.000009862391002129642",
            "extra": "mean: 1.4722083889687523 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 772.4200578109759,
            "unit": "iter/sec",
            "range": "stddev: 0.000011250948498183824",
            "extra": "mean: 1.2946323569509335 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1144.1730786695127,
            "unit": "iter/sec",
            "range": "stddev: 0.000020798105703135484",
            "extra": "mean: 873.99364540445 usec\nrounds: 925"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 1011.3898739172694,
            "unit": "iter/sec",
            "range": "stddev: 0.00018431640010781034",
            "extra": "mean: 988.7383943511768 usec\nrounds: 956"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 667.6379173040408,
            "unit": "iter/sec",
            "range": "stddev: 0.000030268696488031652",
            "extra": "mean: 1.4978178651656813 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 711.7834845147347,
            "unit": "iter/sec",
            "range": "stddev: 0.000034109122752955805",
            "extra": "mean: 1.4049216113545535 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 892.2027376728157,
            "unit": "iter/sec",
            "range": "stddev: 0.00004291744645912559",
            "extra": "mean: 1.120821487959517 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 807.6244278927895,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275517231057603",
            "extra": "mean: 1.2381992984154113 msec\nrounds: 821"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 544.6744665840337,
            "unit": "iter/sec",
            "range": "stddev: 0.000039971199089618734",
            "extra": "mean: 1.8359590202044427 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 659.4320849857984,
            "unit": "iter/sec",
            "range": "stddev: 0.000030678534693526224",
            "extra": "mean: 1.5164563914440654 msec\nrounds: 631"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan Foreman-Mackey",
            "username": "dfm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "068c6492347ad742b9ef969b7a7be1a4a08753be",
          "message": "Create wheels.yml",
          "timestamp": "2020-12-30T15:34:00-05:00",
          "tree_id": "2eb0812192f5ae84a765c60d3ed13836f1184947",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/068c6492347ad742b9ef969b7a7be1a4a08753be"
        },
        "date": 1609360706358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 761.974407735458,
            "unit": "iter/sec",
            "range": "stddev: 0.00008685062234802154",
            "extra": "mean: 1.312380035140471 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 396.7313604529022,
            "unit": "iter/sec",
            "range": "stddev: 0.00013858658074958954",
            "extra": "mean: 2.5205973101254613 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 943.184038796513,
            "unit": "iter/sec",
            "range": "stddev: 0.00007610633688198232",
            "extra": "mean: 1.0602384676441123 msec\nrounds: 819"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 755.574897273546,
            "unit": "iter/sec",
            "range": "stddev: 0.00007597651489719745",
            "extra": "mean: 1.3234955311623635 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 394.83781640811316,
            "unit": "iter/sec",
            "range": "stddev: 0.0001262701219311652",
            "extra": "mean: 2.5326854684212354 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 344.0408477671816,
            "unit": "iter/sec",
            "range": "stddev: 0.00021454027216793973",
            "extra": "mean: 2.9066316005497037 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 816.2196512306922,
            "unit": "iter/sec",
            "range": "stddev: 0.00011784959856172256",
            "extra": "mean: 1.225160406873572 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 409.26124086313456,
            "unit": "iter/sec",
            "range": "stddev: 0.00018284589340004053",
            "extra": "mean: 2.443427083129088 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 321.03530574822173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001176752687117184",
            "extra": "mean: 3.1149221973245202 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 749.8084199705729,
            "unit": "iter/sec",
            "range": "stddev: 0.000053379333363547994",
            "extra": "mean: 1.3336740070740287 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 384.0915347873436,
            "unit": "iter/sec",
            "range": "stddev: 0.00008580166763196115",
            "extra": "mean: 2.603546054597794 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 274.4338324801448,
            "unit": "iter/sec",
            "range": "stddev: 0.00006849355057735741",
            "extra": "mean: 3.643865593985572 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 761.2033879042147,
            "unit": "iter/sec",
            "range": "stddev: 0.00010686559602673653",
            "extra": "mean: 1.3137093395672512 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 389.8227142416893,
            "unit": "iter/sec",
            "range": "stddev: 0.00015765794673651905",
            "extra": "mean: 2.5652686810343277 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 266.1874457715406,
            "unit": "iter/sec",
            "range": "stddev: 0.0001654227066795211",
            "extra": "mean: 3.756751176230396 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1202.9224505631507,
            "unit": "iter/sec",
            "range": "stddev: 0.00004845619380182518",
            "extra": "mean: 831.3087843126111 usec\nrounds: 918"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1044.3678345737094,
            "unit": "iter/sec",
            "range": "stddev: 0.00007015287680376198",
            "extra": "mean: 957.5170422671822 usec\nrounds: 1041"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 642.9037122975989,
            "unit": "iter/sec",
            "range": "stddev: 0.0001507769527111425",
            "extra": "mean: 1.5554428771708537 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 742.2729038611915,
            "unit": "iter/sec",
            "range": "stddev: 0.00012691046834074457",
            "extra": "mean: 1.3472133965798174 msec\nrounds: 643"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1013.0323789665657,
            "unit": "iter/sec",
            "range": "stddev: 0.00047220123613209104",
            "extra": "mean: 987.1352789534126 usec\nrounds: 803"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 919.1180973260131,
            "unit": "iter/sec",
            "range": "stddev: 0.0001041276843162945",
            "extra": "mean: 1.087999466999177 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 579.0663717519741,
            "unit": "iter/sec",
            "range": "stddev: 0.0001550990674279872",
            "extra": "mean: 1.7269177572416867 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 599.0938458781642,
            "unit": "iter/sec",
            "range": "stddev: 0.0001427461569840234",
            "extra": "mean: 1.6691875686590958 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 726.2913189291204,
            "unit": "iter/sec",
            "range": "stddev: 0.00007881928757030563",
            "extra": "mean: 1.376857982378819 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 681.1602743846589,
            "unit": "iter/sec",
            "range": "stddev: 0.00013118185024300598",
            "extra": "mean: 1.4680832655770655 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 451.2370068146387,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716345390302911",
            "extra": "mean: 2.2161302927239404 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 541.2336225145598,
            "unit": "iter/sec",
            "range": "stddev: 0.00017011522766011055",
            "extra": "mean: 1.8476309645251185 msec\nrounds: 592"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan Foreman-Mackey",
            "username": "dfm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad83aa2b94f97b8c03efaa13d93f3c4462541ab0",
          "message": "Update wheels.yml",
          "timestamp": "2020-12-30T15:34:34-05:00",
          "tree_id": "6b1ffa1a9e2f25a9fcebd3d21a88ec35d495789e",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/ad83aa2b94f97b8c03efaa13d93f3c4462541ab0"
        },
        "date": 1609360757999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 767.2082675064504,
            "unit": "iter/sec",
            "range": "stddev: 0.00008232824661464842",
            "extra": "mean: 1.303427038462659 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 402.7852561608554,
            "unit": "iter/sec",
            "range": "stddev: 0.00012147907582345695",
            "extra": "mean: 2.4827125241164296 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 947.476626385553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000843182446048051",
            "extra": "mean: 1.0554350072094274 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 785.3204140328043,
            "unit": "iter/sec",
            "range": "stddev: 0.00008418285590795398",
            "extra": "mean: 1.2733655997362474 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 405.6687952566947,
            "unit": "iter/sec",
            "range": "stddev: 0.00013210484147208054",
            "extra": "mean: 2.4650651262620062 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 325.8521057978244,
            "unit": "iter/sec",
            "range": "stddev: 0.00017506978142763479",
            "extra": "mean: 3.068876899081487 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 797.4941620645789,
            "unit": "iter/sec",
            "range": "stddev: 0.00008658035588082785",
            "extra": "mean: 1.2539276744185406 msec\nrounds: 731"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 402.7938108995903,
            "unit": "iter/sec",
            "range": "stddev: 0.00012860190575246709",
            "extra": "mean: 2.4826597950118034 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 326.04219736641255,
            "unit": "iter/sec",
            "range": "stddev: 0.00016486691319572466",
            "extra": "mean: 3.0670876594423775 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 780.4491955163271,
            "unit": "iter/sec",
            "range": "stddev: 0.00009393588133089229",
            "extra": "mean: 1.2813133843240407 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 391.911859510888,
            "unit": "iter/sec",
            "range": "stddev: 0.00010125888436343865",
            "extra": "mean: 2.551594129475988 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 284.80938792510324,
            "unit": "iter/sec",
            "range": "stddev: 0.00015603179994313652",
            "extra": "mean: 3.5111202172274307 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 767.3238524326006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007944353920567844",
            "extra": "mean: 1.3032306982635302 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 393.1538798448795,
            "unit": "iter/sec",
            "range": "stddev: 0.00011923750049191877",
            "extra": "mean: 2.543533337111042 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 280.4276733763199,
            "unit": "iter/sec",
            "range": "stddev: 0.0002475263289310704",
            "extra": "mean: 3.565981873187138 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1216.4858223172757,
            "unit": "iter/sec",
            "range": "stddev: 0.00041470730120865795",
            "extra": "mean: 822.0399955793209 usec\nrounds: 905"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1027.5041937536532,
            "unit": "iter/sec",
            "range": "stddev: 0.00010318742037205958",
            "extra": "mean: 973.232037474051 usec\nrounds: 934"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 598.2674808791728,
            "unit": "iter/sec",
            "range": "stddev: 0.00016266995173088166",
            "extra": "mean: 1.671493156423058 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 686.695053017854,
            "unit": "iter/sec",
            "range": "stddev: 0.00020348355756455514",
            "extra": "mean: 1.4562504791686628 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1009.3867729300463,
            "unit": "iter/sec",
            "range": "stddev: 0.00004808673750313408",
            "extra": "mean: 990.700519184734 usec\nrounds: 834"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 869.0739030579205,
            "unit": "iter/sec",
            "range": "stddev: 0.00006723140828606625",
            "extra": "mean: 1.1506501305371193 msec\nrounds: 858"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 572.9682787140732,
            "unit": "iter/sec",
            "range": "stddev: 0.00014220622655830302",
            "extra": "mean: 1.7452973177578428 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 583.8584184354025,
            "unit": "iter/sec",
            "range": "stddev: 0.00010650940383449893",
            "extra": "mean: 1.7127439948194203 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 733.8595430101843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000708396815127537",
            "extra": "mean: 1.362658576187681 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 661.2336022190522,
            "unit": "iter/sec",
            "range": "stddev: 0.00008889280457024137",
            "extra": "mean: 1.5123248374614846 msec\nrounds: 646"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 460.08305280836225,
            "unit": "iter/sec",
            "range": "stddev: 0.00016365480764723008",
            "extra": "mean: 2.1735206152366766 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 524.3054395017303,
            "unit": "iter/sec",
            "range": "stddev: 0.00011877089860384471",
            "extra": "mean: 1.9072851903850976 msec\nrounds: 499"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan Foreman-Mackey",
            "username": "dfm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02f2fa76d850441d56a0f1976788be1a1fb08126",
          "message": "Update wheels.yml",
          "timestamp": "2020-12-30T15:37:10-05:00",
          "tree_id": "e0c865cdc24bd801c0bdd36dcf0a889d9fadf250",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/02f2fa76d850441d56a0f1976788be1a1fb08126"
        },
        "date": 1609360922377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 735.4767086632429,
            "unit": "iter/sec",
            "range": "stddev: 0.000042313145692073334",
            "extra": "mean: 1.3596623634996385 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 381.20782603458883,
            "unit": "iter/sec",
            "range": "stddev: 0.00006670839795087145",
            "extra": "mean: 2.6232410032139923 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 908.257972999375,
            "unit": "iter/sec",
            "range": "stddev: 0.00003905676709813283",
            "extra": "mean: 1.101008776942152 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 736.648094302558,
            "unit": "iter/sec",
            "range": "stddev: 0.00004348616809541522",
            "extra": "mean: 1.3575002877687177 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 378.7816226574234,
            "unit": "iter/sec",
            "range": "stddev: 0.00007295617853815934",
            "extra": "mean: 2.6400436034469847 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 315.350223022383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000854946414577119",
            "extra": "mean: 3.1710775100007518 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 731.2251763983654,
            "unit": "iter/sec",
            "range": "stddev: 0.00003495679570153574",
            "extra": "mean: 1.367567792079424 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 377.88471606356387,
            "unit": "iter/sec",
            "range": "stddev: 0.000069831918805634",
            "extra": "mean: 2.6463097275196232 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 314.82923913914595,
            "unit": "iter/sec",
            "range": "stddev: 0.00008699227628836415",
            "extra": "mean: 3.176325053970058 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 729.8696350482373,
            "unit": "iter/sec",
            "range": "stddev: 0.00003544007192847478",
            "extra": "mean: 1.3701076904424303 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 373.4381880026899,
            "unit": "iter/sec",
            "range": "stddev: 0.00006861816807114405",
            "extra": "mean: 2.6778193343011747 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 276.27450356280406,
            "unit": "iter/sec",
            "range": "stddev: 0.00008866503316799235",
            "extra": "mean: 3.6195884423068927 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 713.2839505948953,
            "unit": "iter/sec",
            "range": "stddev: 0.000024433707058922917",
            "extra": "mean: 1.4019662143890619 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 373.5553220344911,
            "unit": "iter/sec",
            "range": "stddev: 0.00006869721001715576",
            "extra": "mean: 2.6769796627543916 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 256.99365387977616,
            "unit": "iter/sec",
            "range": "stddev: 0.00008890653854538184",
            "extra": "mean: 3.891146668033323 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1084.9943966871317,
            "unit": "iter/sec",
            "range": "stddev: 0.000606177928844175",
            "extra": "mean: 921.663745963436 usec\nrounds: 929"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 983.5507621829889,
            "unit": "iter/sec",
            "range": "stddev: 0.0000288719062653437",
            "extra": "mean: 1.016724340470747 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 576.5987375665692,
            "unit": "iter/sec",
            "range": "stddev: 0.00005931844787521386",
            "extra": "mean: 1.734308341048958 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 659.6825643732265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004408179342554698",
            "extra": "mean: 1.5158805977388745 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 963.3012036535965,
            "unit": "iter/sec",
            "range": "stddev: 0.00006190726728672678",
            "extra": "mean: 1.0380969069769794 msec\nrounds: 774"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 835.6485711225689,
            "unit": "iter/sec",
            "range": "stddev: 0.00003239382782909888",
            "extra": "mean: 1.1966752945638972 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 520.9998617394871,
            "unit": "iter/sec",
            "range": "stddev: 0.00007641590867108168",
            "extra": "mean: 1.9193863059027545 msec\nrounds: 559"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 539.5915553102449,
            "unit": "iter/sec",
            "range": "stddev: 0.00003409913237232023",
            "extra": "mean: 1.8532536140693263 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 669.6424150820322,
            "unit": "iter/sec",
            "range": "stddev: 0.0004224024957635338",
            "extra": "mean: 1.4933343191492707 msec\nrounds: 611"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 610.1840798333269,
            "unit": "iter/sec",
            "range": "stddev: 0.00002522291094641526",
            "extra": "mean: 1.6388497062610223 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 416.9220314109045,
            "unit": "iter/sec",
            "range": "stddev: 0.00004927003960561682",
            "extra": "mean: 2.398530000000008 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 481.83953690742453,
            "unit": "iter/sec",
            "range": "stddev: 0.000026941137675519265",
            "extra": "mean: 2.075379713375678 msec\nrounds: 471"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan Foreman-Mackey",
            "username": "dfm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b57cea5d7fa631285073dfdcdd55ef6de5a8792",
          "message": "Update wheels.yml",
          "timestamp": "2020-12-30T15:46:23-05:00",
          "tree_id": "eaea1366e59f7d6e3c0537bf1e5e441f77b2c6c6",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/6b57cea5d7fa631285073dfdcdd55ef6de5a8792"
        },
        "date": 1609361490332,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 866.8666480180518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036510628132620828",
            "extra": "mean: 1.153579967906639 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 450.588385142445,
            "unit": "iter/sec",
            "range": "stddev: 0.00001013142325706465",
            "extra": "mean: 2.2193204107644027 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1060.5870396897913,
            "unit": "iter/sec",
            "range": "stddev: 0.000011879753070558035",
            "extra": "mean: 942.8740523667797 usec\nrounds: 993"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 865.163637013774,
            "unit": "iter/sec",
            "range": "stddev: 0.000004110060924109884",
            "extra": "mean: 1.1558507052511262 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 445.8399282763496,
            "unit": "iter/sec",
            "range": "stddev: 0.000010212342401842251",
            "extra": "mean: 2.2429574754914268 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.2207909345109,
            "unit": "iter/sec",
            "range": "stddev: 0.000009440876932234578",
            "extra": "mean: 2.7010908746529365 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 866.435083715962,
            "unit": "iter/sec",
            "range": "stddev: 0.000004439191552212642",
            "extra": "mean: 1.1541545567513327 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 441.3571596825928,
            "unit": "iter/sec",
            "range": "stddev: 0.00006763585055861273",
            "extra": "mean: 2.2657387063102403 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 366.0677851214648,
            "unit": "iter/sec",
            "range": "stddev: 0.00023672161453663324",
            "extra": "mean: 2.731734505586692 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 866.6161491978071,
            "unit": "iter/sec",
            "range": "stddev: 0.000004803681493809118",
            "extra": "mean: 1.153913414751919 msec\nrounds: 827"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 436.12670186190485,
            "unit": "iter/sec",
            "range": "stddev: 0.00000954826487241897",
            "extra": "mean: 2.2929116601455877 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.927670434355,
            "unit": "iter/sec",
            "range": "stddev: 0.000009917767988073765",
            "extra": "mean: 3.077608006308683 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 852.0929663008046,
            "unit": "iter/sec",
            "range": "stddev: 0.000003955820907060152",
            "extra": "mean: 1.173580864469877 msec\nrounds: 819"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 436.956948209758,
            "unit": "iter/sec",
            "range": "stddev: 0.000018628404836087083",
            "extra": "mean: 2.2885549802951233 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 303.2807768714612,
            "unit": "iter/sec",
            "range": "stddev: 0.000007307710198208234",
            "extra": "mean: 3.2972745925925517 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1346.53862345841,
            "unit": "iter/sec",
            "range": "stddev: 0.00006441832477527546",
            "extra": "mean: 742.6448692809342 usec\nrounds: 1071"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1164.057532226773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034024623887237418",
            "extra": "mean: 859.064068841219 usec\nrounds: 1104"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 664.5233462759685,
            "unit": "iter/sec",
            "range": "stddev: 0.000022991194834766485",
            "extra": "mean: 1.5048380250356352 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 772.9646327579005,
            "unit": "iter/sec",
            "range": "stddev: 0.000011703453299612735",
            "extra": "mean: 1.293720252674496 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1142.070853346088,
            "unit": "iter/sec",
            "range": "stddev: 0.00003658833698119172",
            "extra": "mean: 875.6024173720548 usec\nrounds: 944"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 990.031375119698,
            "unit": "iter/sec",
            "range": "stddev: 0.000007056023063491127",
            "extra": "mean: 1.0100689989537923 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 596.6505238732872,
            "unit": "iter/sec",
            "range": "stddev: 0.000030360838789296125",
            "extra": "mean: 1.6760229983680925 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 641.568652036497,
            "unit": "iter/sec",
            "range": "stddev: 0.00000893270864934497",
            "extra": "mean: 1.5586796468713886 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 821.9732354734448,
            "unit": "iter/sec",
            "range": "stddev: 0.000010810520268278923",
            "extra": "mean: 1.2165846244665308 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 725.656435318208,
            "unit": "iter/sec",
            "range": "stddev: 0.000005378739693783393",
            "extra": "mean: 1.3780626083216494 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 491.67939998288733,
            "unit": "iter/sec",
            "range": "stddev: 0.000026015477778660687",
            "extra": "mean: 2.0338456320008618 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.5394671037766,
            "unit": "iter/sec",
            "range": "stddev: 0.000007438712518708337",
            "extra": "mean: 1.734486634581082 msec\nrounds: 561"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "274848214546514585717f54f031adacf4d96b92",
          "message": "removing old interp op",
          "timestamp": "2020-12-30T15:57:27-05:00",
          "tree_id": "5bd5fd5f9598ece7697f26fdba317877d130f724",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/274848214546514585717f54f031adacf4d96b92"
        },
        "date": 1609362140545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 657.4645393185443,
            "unit": "iter/sec",
            "range": "stddev: 0.00022201637672609374",
            "extra": "mean: 1.5209945787136905 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 352.1669939043644,
            "unit": "iter/sec",
            "range": "stddev: 0.000558013759636868",
            "extra": "mean: 2.8395619615379495 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 780.3517602633739,
            "unit": "iter/sec",
            "range": "stddev: 0.0001754007536405965",
            "extra": "mean: 1.2814733699870087 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 635.0006805761511,
            "unit": "iter/sec",
            "range": "stddev: 0.0003657496423826868",
            "extra": "mean: 1.5748014617758774 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 324.7347782226413,
            "unit": "iter/sec",
            "range": "stddev: 0.0004270571635765411",
            "extra": "mean: 3.0794361031277973 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 268.71013849289636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005026442033125574",
            "extra": "mean: 3.721482209821555 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 639.3589959849965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002316348893579378",
            "extra": "mean: 1.5640665201862063 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 325.17307778361203,
            "unit": "iter/sec",
            "range": "stddev: 0.000457720359778642",
            "extra": "mean: 3.0752853428581033 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 274.94268108081957,
            "unit": "iter/sec",
            "range": "stddev: 0.00031049975031489674",
            "extra": "mean: 3.637121730496435 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 635.988051744119,
            "unit": "iter/sec",
            "range": "stddev: 0.00025501349833459246",
            "extra": "mean: 1.5723565832056483 msec\nrounds: 655"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 322.1406843783775,
            "unit": "iter/sec",
            "range": "stddev: 0.00038427047692011",
            "extra": "mean: 3.104233797508879 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 235.65427075305473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006236382744763796",
            "extra": "mean: 4.24350467659427 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 622.9350775583334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002921767615318428",
            "extra": "mean: 1.605303724297589 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 321.49641687071704,
            "unit": "iter/sec",
            "range": "stddev: 0.0005271149335222409",
            "extra": "mean: 3.110454572817615 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 226.4778044768521,
            "unit": "iter/sec",
            "range": "stddev: 0.0004886511173342038",
            "extra": "mean: 4.415443722222273 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 797.9449335345081,
            "unit": "iter/sec",
            "range": "stddev: 0.00024077252362065486",
            "extra": "mean: 1.253219311225508 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 664.6477726825153,
            "unit": "iter/sec",
            "range": "stddev: 0.00020618440324245805",
            "extra": "mean: 1.50455630952317 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 433.9519533338232,
            "unit": "iter/sec",
            "range": "stddev: 0.0002253385646889376",
            "extra": "mean: 2.304402578021666 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 494.1084789245877,
            "unit": "iter/sec",
            "range": "stddev: 0.00021821304051967112",
            "extra": "mean: 2.0238470753962168 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 674.6200420104466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002474458267777958",
            "extra": "mean: 1.482315878164371 msec\nrounds: 632"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 575.6089430453827,
            "unit": "iter/sec",
            "range": "stddev: 0.0003064644224863236",
            "extra": "mean: 1.7372905895264332 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 392.0586408584208,
            "unit": "iter/sec",
            "range": "stddev: 0.00035709147937118454",
            "extra": "mean: 2.5506388478276585 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 393.0328558783479,
            "unit": "iter/sec",
            "range": "stddev: 0.000520608159948562",
            "extra": "mean: 2.5443165502415943 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 512.1791448996352,
            "unit": "iter/sec",
            "range": "stddev: 0.0003797164766366577",
            "extra": "mean: 1.9524418554682788 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 458.14350177830664,
            "unit": "iter/sec",
            "range": "stddev: 0.00018762368882141743",
            "extra": "mean: 2.182722217205855 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 327.3437590104504,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374056670916986",
            "extra": "mean: 3.054892517343137 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 366.7575138794564,
            "unit": "iter/sec",
            "range": "stddev: 0.0003059462720662255",
            "extra": "mean: 2.726597171581531 msec\nrounds: 373"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "678c3c80d1646b0f437d752c6c981268fb48b721",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/678c3c80d1646b0f437d752c6c981268fb48b721"
        },
        "date": 1609860423690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 903.757024512604,
            "unit": "iter/sec",
            "range": "stddev: 0.00028346224268469976",
            "extra": "mean: 1.1064920912114624 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 375.27072234012644,
            "unit": "iter/sec",
            "range": "stddev: 0.00027437799096759083",
            "extra": "mean: 2.664742918829811 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 831.4732508973286,
            "unit": "iter/sec",
            "range": "stddev: 0.0002005986913003689",
            "extra": "mean: 1.2026845108015163 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 902.1890021657579,
            "unit": "iter/sec",
            "range": "stddev: 0.00024201039059284905",
            "extra": "mean: 1.1084151963717592 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 358.52693961065836,
            "unit": "iter/sec",
            "range": "stddev: 0.00033554048851212984",
            "extra": "mean: 2.789190684208969 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 302.1352482117859,
            "unit": "iter/sec",
            "range": "stddev: 0.00040329956967755754",
            "extra": "mean: 3.309776022223783 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 940.8098829683317,
            "unit": "iter/sec",
            "range": "stddev: 0.000186022401952443",
            "extra": "mean: 1.0629140043096896 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 356.88432224714444,
            "unit": "iter/sec",
            "range": "stddev: 0.00040647788532646446",
            "extra": "mean: 2.802028381923413 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 309.82859831278876,
            "unit": "iter/sec",
            "range": "stddev: 0.00033387897912582915",
            "extra": "mean: 3.2275910146630356 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 919.5350530029215,
            "unit": "iter/sec",
            "range": "stddev: 0.00023367253245763919",
            "extra": "mean: 1.0875061225064824 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 352.682462598696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003038776137678569",
            "extra": "mean: 2.835411754334556 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 271.5250937101074,
            "unit": "iter/sec",
            "range": "stddev: 0.00043581664791659093",
            "extra": "mean: 3.6829008558142533 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 901.4674235028474,
            "unit": "iter/sec",
            "range": "stddev: 0.00024561966839842486",
            "extra": "mean: 1.109302426164534 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 358.9790131209595,
            "unit": "iter/sec",
            "range": "stddev: 0.00020451162560565354",
            "extra": "mean: 2.7856781690550965 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 249.77600140836228,
            "unit": "iter/sec",
            "range": "stddev: 0.0005137838515351336",
            "extra": "mean: 4.0035871915696415 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1087.0470853275358,
            "unit": "iter/sec",
            "range": "stddev: 0.0003822820334141873",
            "extra": "mean: 919.9233533648564 usec\nrounds: 832"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1013.0210507088069,
            "unit": "iter/sec",
            "range": "stddev: 0.00018783868473094714",
            "extra": "mean: 987.1463177396993 usec\nrounds: 1133"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 497.53233539359945,
            "unit": "iter/sec",
            "range": "stddev: 0.00036119821689674966",
            "extra": "mean: 2.009919614991248 msec\nrounds: 587"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 670.0324587918913,
            "unit": "iter/sec",
            "range": "stddev: 0.00031860200690541257",
            "extra": "mean: 1.4924650095355976 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 961.8700454963404,
            "unit": "iter/sec",
            "range": "stddev: 0.0002605914176397585",
            "extra": "mean: 1.039641482424982 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 857.2497439403919,
            "unit": "iter/sec",
            "range": "stddev: 0.00013103691091141413",
            "extra": "mean: 1.1665211999987883 msec\nrounds: 880"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 461.4850594120592,
            "unit": "iter/sec",
            "range": "stddev: 0.0001308172213009936",
            "extra": "mean: 2.1669173889920055 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 587.1372529653086,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113201293829301",
            "extra": "mean: 1.7031792735847504 msec\nrounds: 636"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 688.7479445243027,
            "unit": "iter/sec",
            "range": "stddev: 0.00019603881425791288",
            "extra": "mean: 1.451909959151558 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 636.4318453218274,
            "unit": "iter/sec",
            "range": "stddev: 0.00030129156153196695",
            "extra": "mean: 1.5712601551142138 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 379.82878678042704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002762657872581472",
            "extra": "mean: 2.6327651689498826 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 511.8441936170451,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870995395042087",
            "extra": "mean: 1.9537195351056118 msec\nrounds: 527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "332f4dd584ac29ae39dacfe62d28b7a310739544",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/332f4dd584ac29ae39dacfe62d28b7a310739544"
        },
        "date": 1609860680915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 1051.4642097134754,
            "unit": "iter/sec",
            "range": "stddev: 0.00016946513466649978",
            "extra": "mean: 951.054720419348 usec\nrounds: 1048"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 382.079942055579,
            "unit": "iter/sec",
            "range": "stddev: 0.0006324586326238776",
            "extra": "mean: 2.6172533282433745 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 900.5984369577446,
            "unit": "iter/sec",
            "range": "stddev: 0.00015074747130808787",
            "extra": "mean: 1.110372790983335 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 1071.045586462996,
            "unit": "iter/sec",
            "range": "stddev: 0.00013210469487321335",
            "extra": "mean: 933.6670750891045 usec\nrounds: 1132"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 388.9591454063567,
            "unit": "iter/sec",
            "range": "stddev: 0.00021246467741979958",
            "extra": "mean: 2.570964102040258 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 348.79311406576096,
            "unit": "iter/sec",
            "range": "stddev: 0.00043204986829442074",
            "extra": "mean: 2.8670290773328206 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 1053.5120567560273,
            "unit": "iter/sec",
            "range": "stddev: 0.0001992083075034719",
            "extra": "mean: 949.2060328945817 usec\nrounds: 1064"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 384.1990903387123,
            "unit": "iter/sec",
            "range": "stddev: 0.00021093123723409102",
            "extra": "mean: 2.602817198547747 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 356.61631051838947,
            "unit": "iter/sec",
            "range": "stddev: 0.0003259683986371582",
            "extra": "mean: 2.804134220743763 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 1070.9874935765042,
            "unit": "iter/sec",
            "range": "stddev: 0.00018323181272653387",
            "extra": "mean: 933.7177193923662 usec\nrounds: 1119"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 384.8021031165131,
            "unit": "iter/sec",
            "range": "stddev: 0.0002909111033462955",
            "extra": "mean: 2.598738395401163 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 323.3702863794808,
            "unit": "iter/sec",
            "range": "stddev: 0.0002920301839566",
            "extra": "mean: 3.0924300782122023 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 1078.5012676481895,
            "unit": "iter/sec",
            "range": "stddev: 0.00012564940858905804",
            "extra": "mean: 927.2126329351734 usec\nrounds: 1008"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 389.01764770141295,
            "unit": "iter/sec",
            "range": "stddev: 0.00019618636594891749",
            "extra": "mean: 2.5705774684225666 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 289.01861332975113,
            "unit": "iter/sec",
            "range": "stddev: 0.00038494331665503336",
            "extra": "mean: 3.459984768728601 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1220.0428084666212,
            "unit": "iter/sec",
            "range": "stddev: 0.00032206015878280265",
            "extra": "mean: 819.6433707574768 usec\nrounds: 1149"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1172.9149538910385,
            "unit": "iter/sec",
            "range": "stddev: 0.00013031124282610043",
            "extra": "mean: 852.576733447375 usec\nrounds: 1163"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 515.1436182586301,
            "unit": "iter/sec",
            "range": "stddev: 0.00018372080165789548",
            "extra": "mean: 1.9412062278483777 msec\nrounds: 632"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 769.0701630056914,
            "unit": "iter/sec",
            "range": "stddev: 0.000322132029625062",
            "extra": "mean: 1.300271481202424 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1027.8056858094665,
            "unit": "iter/sec",
            "range": "stddev: 0.00021473251973941926",
            "extra": "mean: 972.9465538152109 usec\nrounds: 957"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 990.5271173114127,
            "unit": "iter/sec",
            "range": "stddev: 0.00012383653235376952",
            "extra": "mean: 1.0095634763784151 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 495.9551227393653,
            "unit": "iter/sec",
            "range": "stddev: 0.00014557054205970905",
            "extra": "mean: 2.0163114647885605 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 643.9717515117482,
            "unit": "iter/sec",
            "range": "stddev: 0.00026259075695521085",
            "extra": "mean: 1.5528631460191569 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 772.0408229027149,
            "unit": "iter/sec",
            "range": "stddev: 0.00017038910211567273",
            "extra": "mean: 1.2952682945445881 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 713.6500351069745,
            "unit": "iter/sec",
            "range": "stddev: 0.0001728055113411489",
            "extra": "mean: 1.401247040995524 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 388.94274713939063,
            "unit": "iter/sec",
            "range": "stddev: 0.00030160964447987923",
            "extra": "mean: 2.571072496800195 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 577.3496394552109,
            "unit": "iter/sec",
            "range": "stddev: 0.000261930586811992",
            "extra": "mean: 1.7320526967741825 msec\nrounds: 620"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "de5cd67eabcee119598d02c9b8e8ced43504e683",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/de5cd67eabcee119598d02c9b8e8ced43504e683"
        },
        "date": 1609860870111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 1100.289659484633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034498078811862986",
            "extra": "mean: 908.8515841077632 usec\nrounds: 969"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 501.7548589114975,
            "unit": "iter/sec",
            "range": "stddev: 0.000011130450964825675",
            "extra": "mean: 1.9930051144285699 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1204.4909338279908,
            "unit": "iter/sec",
            "range": "stddev: 0.000007052787838483257",
            "extra": "mean: 830.226257346663 usec\nrounds: 1123"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 1094.939261454731,
            "unit": "iter/sec",
            "range": "stddev: 0.000003998632718176974",
            "extra": "mean: 913.292668555336 usec\nrounds: 1059"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 495.8221826735575,
            "unit": "iter/sec",
            "range": "stddev: 0.000014443540534392239",
            "extra": "mean: 2.016852079122055 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 419.83814573527474,
            "unit": "iter/sec",
            "range": "stddev: 0.000007247488003778646",
            "extra": "mean: 2.3818702758623114 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 1098.923783958999,
            "unit": "iter/sec",
            "range": "stddev: 0.000002900058021549525",
            "extra": "mean: 909.9812148913417 usec\nrounds: 1061"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 494.0284212554718,
            "unit": "iter/sec",
            "range": "stddev: 0.00001027462192510358",
            "extra": "mean: 2.0241750413037076 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 418.02522017760265,
            "unit": "iter/sec",
            "range": "stddev: 0.00000638698388408814",
            "extra": "mean: 2.392200163366074 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 1100.8527515219473,
            "unit": "iter/sec",
            "range": "stddev: 0.000004623799984551239",
            "extra": "mean: 908.386701688744 usec\nrounds: 1066"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 490.19398974664176,
            "unit": "iter/sec",
            "range": "stddev: 0.000012811700068619116",
            "extra": "mean: 2.040008692307413 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 368.5548743066156,
            "unit": "iter/sec",
            "range": "stddev: 0.000006366048361666708",
            "extra": "mean: 2.713300161560365 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 1081.8361838410783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032004483151658426",
            "extra": "mean: 924.3543661568818 usec\nrounds: 1046"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 490.74709057980175,
            "unit": "iter/sec",
            "range": "stddev: 0.000012577670624327192",
            "extra": "mean: 2.0377094825331157 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 344.1034625311742,
            "unit": "iter/sec",
            "range": "stddev: 0.00000656915910651407",
            "extra": "mean: 2.9061026955211315 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1527.4902193685102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000173525138575412",
            "extra": "mean: 654.6686763162494 usec\nrounds: 1140"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1319.4966748184106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039576584575328504",
            "extra": "mean: 757.8647366713676 usec\nrounds: 1238"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 678.6830040433576,
            "unit": "iter/sec",
            "range": "stddev: 0.00003000775840940351",
            "extra": "mean: 1.4734419368723648 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 766.8267249762537,
            "unit": "iter/sec",
            "range": "stddev: 0.000019627841499883762",
            "extra": "mean: 1.304075572002224 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1117.3364327463348,
            "unit": "iter/sec",
            "range": "stddev: 0.00001357534402919473",
            "extra": "mean: 894.9855841915669 usec\nrounds: 873"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 982.6000625317915,
            "unit": "iter/sec",
            "range": "stddev: 0.000012197396429777472",
            "extra": "mean: 1.017708056544771 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 606.7523430890177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000530917349897943",
            "extra": "mean: 1.6481188929719357 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 635.8220071917489,
            "unit": "iter/sec",
            "range": "stddev: 0.000014467950455252902",
            "extra": "mean: 1.5727672032252002 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 805.5776311367795,
            "unit": "iter/sec",
            "range": "stddev: 0.000030658879239648885",
            "extra": "mean: 1.2413452923076627 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 721.171886532685,
            "unit": "iter/sec",
            "range": "stddev: 0.00001292555014788994",
            "extra": "mean: 1.3866319786921948 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 497.2815949876322,
            "unit": "iter/sec",
            "range": "stddev: 0.00003646377826749637",
            "extra": "mean: 2.0109330610252543 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.5319001465426,
            "unit": "iter/sec",
            "range": "stddev: 0.000004746468121293628",
            "extra": "mean: 1.7345093996460914 msec\nrounds: 563"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "884d2c9a66880380e4b317888056f6617964d827",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/884d2c9a66880380e4b317888056f6617964d827"
        },
        "date": 1609860955638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 970.7611378214474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035358439782843644",
            "extra": "mean: 1.0301195227532178 msec\nrounds: 857"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.0044564629274,
            "unit": "iter/sec",
            "range": "stddev: 0.000009932378651486333",
            "extra": "mean: 2.237114161932154 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1063.8384553563997,
            "unit": "iter/sec",
            "range": "stddev: 0.000005616315062633724",
            "extra": "mean: 939.9923409094918 usec\nrounds: 968"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 965.7588597134734,
            "unit": "iter/sec",
            "range": "stddev: 0.000004734361951432127",
            "extra": "mean: 1.035455165585212 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 442.6411295580518,
            "unit": "iter/sec",
            "range": "stddev: 0.00001092303812119239",
            "extra": "mean: 2.259166474200973 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.24412436121537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074837519067099195",
            "extra": "mean: 2.700920647222442 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 969.3996148388592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035667358876887394",
            "extra": "mean: 1.0315663269231106 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 439.83379143444586,
            "unit": "iter/sec",
            "range": "stddev: 0.00000945724097538551",
            "extra": "mean: 2.27358611246913 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.8893335471498,
            "unit": "iter/sec",
            "range": "stddev: 0.000007538167333910808",
            "extra": "mean: 2.7108401058502936 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 971.40134502683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043877883861934985",
            "extra": "mean: 1.029440617021567 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 436.81847115277037,
            "unit": "iter/sec",
            "range": "stddev: 0.000008794465611107449",
            "extra": "mean: 2.289280481571636 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 325.24181706095334,
            "unit": "iter/sec",
            "range": "stddev: 0.00000733908465266885",
            "extra": "mean: 3.074635386791578 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 952.2827660231633,
            "unit": "iter/sec",
            "range": "stddev: 0.000024626089188696197",
            "extra": "mean: 1.0501082616207675 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 435.89807844382483,
            "unit": "iter/sec",
            "range": "stddev: 0.00006241867468629099",
            "extra": "mean: 2.294114265357727 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 301.98281888368894,
            "unit": "iter/sec",
            "range": "stddev: 0.00002278590879867623",
            "extra": "mean: 3.3114466700344227 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1348.5438709225048,
            "unit": "iter/sec",
            "range": "stddev: 0.000027777284146748755",
            "extra": "mean: 741.5405768860344 usec\nrounds: 1021"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1163.5077050950622,
            "unit": "iter/sec",
            "range": "stddev: 0.000004341885857572241",
            "extra": "mean: 859.4700281063432 usec\nrounds: 1103"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 682.2807717516217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002964267227612162",
            "extra": "mean: 1.4656722589919933 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 774.5649104696563,
            "unit": "iter/sec",
            "range": "stddev: 0.00001139683712266858",
            "extra": "mean: 1.2910473821924768 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1146.0368406151,
            "unit": "iter/sec",
            "range": "stddev: 0.000024705611947954395",
            "extra": "mean: 872.5722983418935 usec\nrounds: 905"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 990.4922214686962,
            "unit": "iter/sec",
            "range": "stddev: 0.000003887848940113792",
            "extra": "mean: 1.0095990441168794 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 617.4981599808807,
            "unit": "iter/sec",
            "range": "stddev: 0.000025088665862211",
            "extra": "mean: 1.619438023962634 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 642.2512606024771,
            "unit": "iter/sec",
            "range": "stddev: 0.000008194296161874638",
            "extra": "mean: 1.557023024076168 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 818.2192324941351,
            "unit": "iter/sec",
            "range": "stddev: 0.00021510308821863768",
            "extra": "mean: 1.2221663342619704 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 726.4705413426899,
            "unit": "iter/sec",
            "range": "stddev: 0.000003959544066171827",
            "extra": "mean: 1.376518307475707 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 499.7115697216539,
            "unit": "iter/sec",
            "range": "stddev: 0.000032556960314261276",
            "extra": "mean: 2.0011543870337314 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.5238200450277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062308104805080195",
            "extra": "mean: 1.7345337091568878 msec\nrounds: 557"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "d5c1c5c875acc613cf05e18046db59fe87dc8c06",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/d5c1c5c875acc613cf05e18046db59fe87dc8c06"
        },
        "date": 1609861356198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 776.4680116928001,
            "unit": "iter/sec",
            "range": "stddev: 0.000003930018099826855",
            "extra": "mean: 1.2878830614282117 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 362.7776131622263,
            "unit": "iter/sec",
            "range": "stddev: 0.000009925886344323468",
            "extra": "mean: 2.7565096734699046 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 849.6521736941289,
            "unit": "iter/sec",
            "range": "stddev: 0.000006866788738090605",
            "extra": "mean: 1.1769522058093336 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 772.5520353679328,
            "unit": "iter/sec",
            "range": "stddev: 0.000005214161398795545",
            "extra": "mean: 1.2944111907280702 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 358.69293983711367,
            "unit": "iter/sec",
            "range": "stddev: 0.000009926729806191746",
            "extra": "mean: 2.787899869047076 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 296.2100701877784,
            "unit": "iter/sec",
            "range": "stddev: 0.000007774864085833745",
            "extra": "mean: 3.3759824551746784 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 775.248057001492,
            "unit": "iter/sec",
            "range": "stddev: 0.000004454051498308049",
            "extra": "mean: 1.2899097146632068 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 356.76757088447994,
            "unit": "iter/sec",
            "range": "stddev: 0.00000931719564844798",
            "extra": "mean: 2.8029453392326302 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 294.84947115467463,
            "unit": "iter/sec",
            "range": "stddev: 0.000007299065552211218",
            "extra": "mean: 3.3915611111115456 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 777.0159585122898,
            "unit": "iter/sec",
            "range": "stddev: 0.00000438061976438483",
            "extra": "mean: 1.286974854306269 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 354.18669753230046,
            "unit": "iter/sec",
            "range": "stddev: 0.000009531029707030383",
            "extra": "mean: 2.823369728358598 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 259.89736861650357,
            "unit": "iter/sec",
            "range": "stddev: 0.000012507840718920068",
            "extra": "mean: 3.8476726614172407 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 763.1295381758838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075704436859377565",
            "extra": "mean: 1.310393517711698 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 354.5836399225449,
            "unit": "iter/sec",
            "range": "stddev: 0.000009581029514318471",
            "extra": "mean: 2.8202090773799933 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 242.58019053878022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000079176249456049",
            "extra": "mean: 4.122348151260663 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1116.5929132772444,
            "unit": "iter/sec",
            "range": "stddev: 0.000030156398893541056",
            "extra": "mean: 895.5815392603205 usec\nrounds: 866"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 930.5976094202101,
            "unit": "iter/sec",
            "range": "stddev: 0.000007055539326750617",
            "extra": "mean: 1.0745783031003375 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 510.4257123872003,
            "unit": "iter/sec",
            "range": "stddev: 0.0003586299790768764",
            "extra": "mean: 1.9591489529849877 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 599.7551145343078,
            "unit": "iter/sec",
            "range": "stddev: 0.0002673938947355485",
            "extra": "mean: 1.6673471818184835 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 857.402553888473,
            "unit": "iter/sec",
            "range": "stddev: 0.00026493478819078026",
            "extra": "mean: 1.1663132976042843 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 749.4415777656064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003763384333429513",
            "extra": "mean: 1.3343268236883938 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 457.75795936955944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003775072508603903",
            "extra": "mean: 2.1845605948113618 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 492.74337132055064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003169047619110169",
            "extra": "mean: 2.0294539880262685 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 617.8348647370445,
            "unit": "iter/sec",
            "range": "stddev: 0.00036041972519891633",
            "extra": "mean: 1.6185554701993194 msec\nrounds: 604"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 544.3244214980086,
            "unit": "iter/sec",
            "range": "stddev: 0.0004791277275219014",
            "extra": "mean: 1.837139691891738 msec\nrounds: 555"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 366.38960439340775,
            "unit": "iter/sec",
            "range": "stddev: 0.0008692684688834661",
            "extra": "mean: 2.729335079404323 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 439.6915723998101,
            "unit": "iter/sec",
            "range": "stddev: 0.00029729773192468034",
            "extra": "mean: 2.2743215080108543 msec\nrounds: 437"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "9daadb20a99463f830f809495e83c431aa00bd71",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/9daadb20a99463f830f809495e83c431aa00bd71"
        },
        "date": 1609861606426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 894.1589931560507,
            "unit": "iter/sec",
            "range": "stddev: 0.000135777150082464",
            "extra": "mean: 1.118369336610226 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 369.40405340459347,
            "unit": "iter/sec",
            "range": "stddev: 0.00031827673523595923",
            "extra": "mean: 2.7070628781237005 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 764.8228770461902,
            "unit": "iter/sec",
            "range": "stddev: 0.0005808115158979807",
            "extra": "mean: 1.307492270448399 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 876.0961181066078,
            "unit": "iter/sec",
            "range": "stddev: 0.0002093281367104099",
            "extra": "mean: 1.141427269602757 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 354.2623416828786,
            "unit": "iter/sec",
            "range": "stddev: 0.0003762211395960158",
            "extra": "mean: 2.8227668660733904 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 298.337549491835,
            "unit": "iter/sec",
            "range": "stddev: 0.00041956440278266327",
            "extra": "mean: 3.3519079368430904 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 886.410817034184,
            "unit": "iter/sec",
            "range": "stddev: 0.00020931362135720634",
            "extra": "mean: 1.1281450776355266 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 355.6728455616514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005670409343976264",
            "extra": "mean: 2.8115725236793843 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 298.99031503474407,
            "unit": "iter/sec",
            "range": "stddev: 0.00027288964385454353",
            "extra": "mean: 3.344589940593211 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 900.2899212000071,
            "unit": "iter/sec",
            "range": "stddev: 0.0001377904316588114",
            "extra": "mean: 1.1107532989673905 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 350.08013811758326,
            "unit": "iter/sec",
            "range": "stddev: 0.00035669779910718163",
            "extra": "mean: 2.8564888181806096 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 267.18170636495336,
            "unit": "iter/sec",
            "range": "stddev: 0.00035447032929587975",
            "extra": "mean: 3.7427712159082596 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 873.7282879812525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279761664579732",
            "extra": "mean: 1.144520572076816 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 345.8123715258865,
            "unit": "iter/sec",
            "range": "stddev: 0.00036485218602751526",
            "extra": "mean: 2.891741540615018 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 242.899620974095,
            "unit": "iter/sec",
            "range": "stddev: 0.00042996793858342665",
            "extra": "mean: 4.1169269675667755 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1054.3085258432723,
            "unit": "iter/sec",
            "range": "stddev: 0.00032640351630513657",
            "extra": "mean: 948.4889626593559 usec\nrounds: 857"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 966.9490430948136,
            "unit": "iter/sec",
            "range": "stddev: 0.00026331289371786965",
            "extra": "mean: 1.0341806604403925 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 487.91378847875274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006372452210553693",
            "extra": "mean: 2.0495424060833796 msec\nrounds: 559"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 652.1549592298495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005747375551938149",
            "extra": "mean: 1.5333778971502903 msec\nrounds: 632"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 891.8749081567092,
            "unit": "iter/sec",
            "range": "stddev: 0.0003614356497680596",
            "extra": "mean: 1.1212334721544743 msec\nrounds: 826"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 806.03156675462,
            "unit": "iter/sec",
            "range": "stddev: 0.00047720152995799547",
            "extra": "mean: 1.240646199535793 msec\nrounds: 862"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 455.58727515702304,
            "unit": "iter/sec",
            "range": "stddev: 0.00033470298498301007",
            "extra": "mean: 2.194969119046047 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 533.9650065646186,
            "unit": "iter/sec",
            "range": "stddev: 0.00043398727179314896",
            "extra": "mean: 1.872781900884704 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 632.8167562679165,
            "unit": "iter/sec",
            "range": "stddev: 0.00038386783377572866",
            "extra": "mean: 1.5802362849833083 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 598.4276801965613,
            "unit": "iter/sec",
            "range": "stddev: 0.00013666674075855348",
            "extra": "mean: 1.6710456970699237 msec\nrounds: 614"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 373.16401117489806,
            "unit": "iter/sec",
            "range": "stddev: 0.0007053786551049418",
            "extra": "mean: 2.679786823095624 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 468.2139058714247,
            "unit": "iter/sec",
            "range": "stddev: 0.00040205719902502665",
            "extra": "mean: 2.1357759508206664 msec\nrounds: 488"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "8ed903dcee6fe28b8f34327bc17034c583878c61",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/8ed903dcee6fe28b8f34327bc17034c583878c61"
        },
        "date": 1609861959271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 920.4385187156174,
            "unit": "iter/sec",
            "range": "stddev: 0.00005284499653733554",
            "extra": "mean: 1.086438669902041 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 366.1709322529421,
            "unit": "iter/sec",
            "range": "stddev: 0.00044847653045869",
            "extra": "mean: 2.730964999999574 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 788.2909183793556,
            "unit": "iter/sec",
            "range": "stddev: 0.00009336799806925778",
            "extra": "mean: 1.2685671960497733 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 876.8143653861043,
            "unit": "iter/sec",
            "range": "stddev: 0.000168200998922436",
            "extra": "mean: 1.1404922632165715 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 352.1916640399505,
            "unit": "iter/sec",
            "range": "stddev: 0.00040663047445101727",
            "extra": "mean: 2.8393630574020796 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 298.54252923670214,
            "unit": "iter/sec",
            "range": "stddev: 0.0002033604354150747",
            "extra": "mean: 3.34960651186532 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 882.6815412048703,
            "unit": "iter/sec",
            "range": "stddev: 0.00014647810231770212",
            "extra": "mean: 1.132911421977839 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 356.6815906535974,
            "unit": "iter/sec",
            "range": "stddev: 0.000198727180222911",
            "extra": "mean: 2.803621005972191 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 297.01021293850914,
            "unit": "iter/sec",
            "range": "stddev: 0.0002854178601983226",
            "extra": "mean: 3.36688758984538 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 905.5478968971357,
            "unit": "iter/sec",
            "range": "stddev: 0.00007214379762314074",
            "extra": "mean: 1.104303818082406 msec\nrounds: 907"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 355.94959891364437,
            "unit": "iter/sec",
            "range": "stddev: 0.00013942141850066975",
            "extra": "mean: 2.8093865059884684 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 271.2770895824618,
            "unit": "iter/sec",
            "range": "stddev: 0.00010741984715544701",
            "extra": "mean: 3.686267799242308 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 840.1583638682561,
            "unit": "iter/sec",
            "range": "stddev: 0.0003268858396702069",
            "extra": "mean: 1.190251794192468 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 350.50420218284745,
            "unit": "iter/sec",
            "range": "stddev: 0.000288584436294554",
            "extra": "mean: 2.8530328417527224 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 252.34324242355123,
            "unit": "iter/sec",
            "range": "stddev: 0.00016794047465271215",
            "extra": "mean: 3.9628562682947828 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1118.5871601766319,
            "unit": "iter/sec",
            "range": "stddev: 0.00020429950609356394",
            "extra": "mean: 893.9848727050413 usec\nrounds: 872"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 996.6743339894288,
            "unit": "iter/sec",
            "range": "stddev: 0.0001758462686138808",
            "extra": "mean: 1.0033367629697652 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 510.6344410132595,
            "unit": "iter/sec",
            "range": "stddev: 0.00011301853768408418",
            "extra": "mean: 1.958348124767466 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 672.5534372279867,
            "unit": "iter/sec",
            "range": "stddev: 0.00011307143372210448",
            "extra": "mean: 1.4868707000021075 msec\nrounds: 640"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 939.3132376053125,
            "unit": "iter/sec",
            "range": "stddev: 0.0002794086888802118",
            "extra": "mean: 1.0646075877195156 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 839.7854806108469,
            "unit": "iter/sec",
            "range": "stddev: 0.00013967331061188052",
            "extra": "mean: 1.1907802922153592 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 448.30334858526396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004281894053481691",
            "extra": "mean: 2.2306324571425935 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 558.700705013889,
            "unit": "iter/sec",
            "range": "stddev: 0.0001925806410741467",
            "extra": "mean: 1.7898670809358306 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 664.1327482688963,
            "unit": "iter/sec",
            "range": "stddev: 0.0003395810211393037",
            "extra": "mean: 1.5057230690800338 msec\nrounds: 608"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 603.8379389190246,
            "unit": "iter/sec",
            "range": "stddev: 0.00022883776907681232",
            "extra": "mean: 1.6560734851973273 msec\nrounds: 608"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 377.9523810482392,
            "unit": "iter/sec",
            "range": "stddev: 0.00026849667505545523",
            "extra": "mean: 2.6458359574995427 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 479.7742948990173,
            "unit": "iter/sec",
            "range": "stddev: 0.0003182605990862292",
            "extra": "mean: 2.0843134170213924 msec\nrounds: 470"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "7b45a8f045566877544095d83f8d3665ceb82d2e",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/7b45a8f045566877544095d83f8d3665ceb82d2e"
        },
        "date": 1609862119788,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 809.1737082997258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033116735260456295",
            "extra": "mean: 1.235828586301015 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 377.8118727601582,
            "unit": "iter/sec",
            "range": "stddev: 0.000009047185131494485",
            "extra": "mean: 2.646819944260508 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 886.96425017376,
            "unit": "iter/sec",
            "range": "stddev: 0.000006290446712282577",
            "extra": "mean: 1.1274411565112077 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 805.1610097725745,
            "unit": "iter/sec",
            "range": "stddev: 0.000004395159379788691",
            "extra": "mean: 1.2419876122447355 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 373.2370700187098,
            "unit": "iter/sec",
            "range": "stddev: 0.000010662321270358822",
            "extra": "mean: 2.679262271429447 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 308.8544516152551,
            "unit": "iter/sec",
            "range": "stddev: 0.000007858961563646423",
            "extra": "mean: 3.2377710431893525 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 807.3751758877,
            "unit": "iter/sec",
            "range": "stddev: 0.00001541380040369773",
            "extra": "mean: 1.2385815539851237 msec\nrounds: 778"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 371.27006050766374,
            "unit": "iter/sec",
            "range": "stddev: 0.00000841164230867555",
            "extra": "mean: 2.6934571525445103 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 306.48866008255436,
            "unit": "iter/sec",
            "range": "stddev: 0.000056673680292481294",
            "extra": "mean: 3.2627634566663724 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 809.7907708455624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035903368499357333",
            "extra": "mean: 1.2348868818989207 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 366.7354484080005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000703937620979879",
            "extra": "mean: 2.726761223495036 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 270.6765244006958,
            "unit": "iter/sec",
            "range": "stddev: 0.000005532909326888528",
            "extra": "mean: 3.694446728300865 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 795.2024073515296,
            "unit": "iter/sec",
            "range": "stddev: 0.000005415809957849673",
            "extra": "mean: 1.2575414646071825 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 369.1339739132618,
            "unit": "iter/sec",
            "range": "stddev: 0.000008981024759555403",
            "extra": "mean: 2.709043519887383 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 252.8071685055863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050345902021480155",
            "extra": "mean: 3.9555840362885233 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1138.2428148909485,
            "unit": "iter/sec",
            "range": "stddev: 0.00023892974552078316",
            "extra": "mean: 878.5471666656706 usec\nrounds: 888"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 961.3362290769692,
            "unit": "iter/sec",
            "range": "stddev: 0.00009156924581870344",
            "extra": "mean: 1.0402187806446803 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 558.2130357806619,
            "unit": "iter/sec",
            "range": "stddev: 0.000034160058812112154",
            "extra": "mean: 1.7914307547502866 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 648.1834005270791,
            "unit": "iter/sec",
            "range": "stddev: 0.000011766267964706634",
            "extra": "mean: 1.5427732323704009 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 946.1252388182137,
            "unit": "iter/sec",
            "range": "stddev: 0.00032203543790100173",
            "extra": "mean: 1.0569425261808683 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 821.0469297935622,
            "unit": "iter/sec",
            "range": "stddev: 0.000008399969868861728",
            "extra": "mean: 1.2179571760306471 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 503.2770109785052,
            "unit": "iter/sec",
            "range": "stddev: 0.00003623301873272068",
            "extra": "mean: 1.9869773071011778 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 536.7926598164487,
            "unit": "iter/sec",
            "range": "stddev: 0.00000509348406140442",
            "extra": "mean: 1.8629166806080035 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 682.0665708692378,
            "unit": "iter/sec",
            "range": "stddev: 0.000016216465716203542",
            "extra": "mean: 1.4661325488003056 msec\nrounds: 625"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 608.1306094439472,
            "unit": "iter/sec",
            "range": "stddev: 0.000004256276303291929",
            "extra": "mean: 1.6443835986390558 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 412.4586382839014,
            "unit": "iter/sec",
            "range": "stddev: 0.00003677112056439354",
            "extra": "mean: 2.424485529411279 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 480.46742199852645,
            "unit": "iter/sec",
            "range": "stddev: 0.000017511287208034186",
            "extra": "mean: 2.081306565678176 msec\nrounds: 472"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "525f25324262d68a4a42732e8b8269e8a2bb8c6a",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/525f25324262d68a4a42732e8b8269e8a2bb8c6a"
        },
        "date": 1609863042574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 953.0937116139751,
            "unit": "iter/sec",
            "range": "stddev: 0.00022364842926032475",
            "extra": "mean: 1.0492147706090658 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 378.40945534899294,
            "unit": "iter/sec",
            "range": "stddev: 0.00018297163012486728",
            "extra": "mean: 2.642640097557122 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 845.9073093645019,
            "unit": "iter/sec",
            "range": "stddev: 0.0001645554623767597",
            "extra": "mean: 1.1821626186813095 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 942.030010649136,
            "unit": "iter/sec",
            "range": "stddev: 0.00012623902459962507",
            "extra": "mean: 1.0615373063443254 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 363.5089411379491,
            "unit": "iter/sec",
            "range": "stddev: 0.0003895639029895074",
            "extra": "mean: 2.7509639704309423 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 335.67322118299387,
            "unit": "iter/sec",
            "range": "stddev: 0.0003255606198459078",
            "extra": "mean: 2.9790878059195713 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 965.305597236997,
            "unit": "iter/sec",
            "range": "stddev: 0.00018698383504037368",
            "extra": "mean: 1.0359413670264725 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 364.26739771457636,
            "unit": "iter/sec",
            "range": "stddev: 0.000135533112580124",
            "extra": "mean: 2.745236071836314 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 322.0317648205508,
            "unit": "iter/sec",
            "range": "stddev: 0.0002847221685617097",
            "extra": "mean: 3.1052837304954704 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 977.8356562167327,
            "unit": "iter/sec",
            "range": "stddev: 0.00021848080851622327",
            "extra": "mean: 1.0226667371376308 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 362.7120767561211,
            "unit": "iter/sec",
            "range": "stddev: 0.00026582842005410724",
            "extra": "mean: 2.7570077317066453 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 283.10262382844184,
            "unit": "iter/sec",
            "range": "stddev: 0.00045027327409517587",
            "extra": "mean: 3.5322879967583516 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 950.43472295939,
            "unit": "iter/sec",
            "range": "stddev: 0.00013840311492521306",
            "extra": "mean: 1.0521501117786158 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 359.9942887703066,
            "unit": "iter/sec",
            "range": "stddev: 0.00022923091439527366",
            "extra": "mean: 2.7778218466072593 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 264.0147797895247,
            "unit": "iter/sec",
            "range": "stddev: 0.00037601318191232984",
            "extra": "mean: 3.7876667389500325 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1145.8833775219218,
            "unit": "iter/sec",
            "range": "stddev: 0.00012661132842871952",
            "extra": "mean: 872.6891580909323 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1017.988146448213,
            "unit": "iter/sec",
            "range": "stddev: 0.00013523717205318793",
            "extra": "mean: 982.3297093281742 usec\nrounds: 1008"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 499.6999943750081,
            "unit": "iter/sec",
            "range": "stddev: 0.0004212161100581081",
            "extra": "mean: 2.0012007429592518 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 698.486475201527,
            "unit": "iter/sec",
            "range": "stddev: 0.000272633657940337",
            "extra": "mean: 1.4316669477551165 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 948.0979554285045,
            "unit": "iter/sec",
            "range": "stddev: 0.0003151778446483949",
            "extra": "mean: 1.054743335616664 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 857.3138417435638,
            "unit": "iter/sec",
            "range": "stddev: 0.0002227020963710648",
            "extra": "mean: 1.166433984042819 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 469.4938926171306,
            "unit": "iter/sec",
            "range": "stddev: 0.00010223844155968859",
            "extra": "mean: 2.12995315961542 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 586.364976814065,
            "unit": "iter/sec",
            "range": "stddev: 0.00017372834050463726",
            "extra": "mean: 1.7054224579260602 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 698.9517166632346,
            "unit": "iter/sec",
            "range": "stddev: 0.0001509659573812006",
            "extra": "mean: 1.4307139909090671 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 634.7664499527331,
            "unit": "iter/sec",
            "range": "stddev: 0.0005035516947783577",
            "extra": "mean: 1.5753825679893187 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 383.05151292677124,
            "unit": "iter/sec",
            "range": "stddev: 0.000297954880142718",
            "extra": "mean: 2.610614933639936 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 527.9651907554585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001886062672186494",
            "extra": "mean: 1.894064263155518 msec\nrounds: 475"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "306bdee4cdbff6191b93ca230070d964bcf48073",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/306bdee4cdbff6191b93ca230070d964bcf48073"
        },
        "date": 1609863259534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 809.3908412228099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053818276569219134",
            "extra": "mean: 1.2354970541663433 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 377.42803094447913,
            "unit": "iter/sec",
            "range": "stddev: 0.000017572825316590345",
            "extra": "mean: 2.6495117426694343 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 889.689708718919,
            "unit": "iter/sec",
            "range": "stddev: 0.00002141739015127213",
            "extra": "mean: 1.123987374699342 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 802.8448012899382,
            "unit": "iter/sec",
            "range": "stddev: 0.000019301941890708434",
            "extra": "mean: 1.2455707484102665 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 372.64430652913103,
            "unit": "iter/sec",
            "range": "stddev: 0.000013521880570036184",
            "extra": "mean: 2.683524160919459 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 310.4011574312907,
            "unit": "iter/sec",
            "range": "stddev: 0.000009794582187695608",
            "extra": "mean: 3.22163747157211 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 808.413711380144,
            "unit": "iter/sec",
            "range": "stddev: 0.000005199551971511225",
            "extra": "mean: 1.2369903997456637 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 371.2107985315382,
            "unit": "iter/sec",
            "range": "stddev: 0.000013497842315328436",
            "extra": "mean: 2.6938871497161996 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 308.7677569156198,
            "unit": "iter/sec",
            "range": "stddev: 0.000011586096741804031",
            "extra": "mean: 3.2386801328912087 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 809.7575887858612,
            "unit": "iter/sec",
            "range": "stddev: 0.000004667258266067737",
            "extra": "mean: 1.2349374848087382 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 367.9280890895076,
            "unit": "iter/sec",
            "range": "stddev: 0.000011044500887007838",
            "extra": "mean: 2.7179224137919116 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 269.87504340800353,
            "unit": "iter/sec",
            "range": "stddev: 0.000008620715877571827",
            "extra": "mean: 3.705418579546743 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 795.1117879791244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048657869763436746",
            "extra": "mean: 1.2576847873701187 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 365.48019111293087,
            "unit": "iter/sec",
            "range": "stddev: 0.00009627773548854183",
            "extra": "mean: 2.736126401146066 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 251.60328414127804,
            "unit": "iter/sec",
            "range": "stddev: 0.000011478181844782988",
            "extra": "mean: 3.9745109186988543 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1096.0957613357737,
            "unit": "iter/sec",
            "range": "stddev: 0.0005246619460891827",
            "extra": "mean: 912.3290457590448 usec\nrounds: 896"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 968.8368443686294,
            "unit": "iter/sec",
            "range": "stddev: 0.000005661138999294735",
            "extra": "mean: 1.0321655352111212 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 558.937837395646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000449211505508277",
            "extra": "mean: 1.7891077202063645 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 648.8017492465513,
            "unit": "iter/sec",
            "range": "stddev: 0.000011007785771250474",
            "extra": "mean: 1.5413028728132943 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 934.494262919222,
            "unit": "iter/sec",
            "range": "stddev: 0.00028166734813557645",
            "extra": "mean: 1.0700975272722892 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 824.6446916841614,
            "unit": "iter/sec",
            "range": "stddev: 0.000006013741680797353",
            "extra": "mean: 1.2126434694652708 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 503.912227723048,
            "unit": "iter/sec",
            "range": "stddev: 0.000047198783774195574",
            "extra": "mean: 1.9844725826927219 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 541.0159410012915,
            "unit": "iter/sec",
            "range": "stddev: 0.000011046768882446622",
            "extra": "mean: 1.8483743716483445 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 682.2079283800098,
            "unit": "iter/sec",
            "range": "stddev: 0.000017541209521834693",
            "extra": "mean: 1.4658287574795974 msec\nrounds: 635"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 605.9367512981877,
            "unit": "iter/sec",
            "range": "stddev: 0.00000811307761022768",
            "extra": "mean: 1.6503372635139766 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 402.9323281108876,
            "unit": "iter/sec",
            "range": "stddev: 0.000037949592045774946",
            "extra": "mean: 2.4818063238767936 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 480.4187391722606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063064482255515635",
            "extra": "mean: 2.0815174731172106 msec\nrounds: 465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "619ddd1fbfdfceefd7fbb2d3339f7c28289aee13",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/619ddd1fbfdfceefd7fbb2d3339f7c28289aee13"
        },
        "date": 1609863566385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 1025.0755398254735,
            "unit": "iter/sec",
            "range": "stddev: 0.0001395560208998563",
            "extra": "mean: 975.5378615026334 usec\nrounds: 852"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 471.0799549296474,
            "unit": "iter/sec",
            "range": "stddev: 0.00027656716592925674",
            "extra": "mean: 2.122781896226816 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1061.4960752649463,
            "unit": "iter/sec",
            "range": "stddev: 0.00013560622849118987",
            "extra": "mean: 942.0666013771204 usec\nrounds: 1016"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 989.3185885991943,
            "unit": "iter/sec",
            "range": "stddev: 0.00014274678380578017",
            "extra": "mean: 1.0107967357774303 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 443.61806148160997,
            "unit": "iter/sec",
            "range": "stddev: 0.00027252250163863024",
            "extra": "mean: 2.254191356997882 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 386.0870474637735,
            "unit": "iter/sec",
            "range": "stddev: 0.00033806236904588665",
            "extra": "mean: 2.5900894799995324 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 1017.594363656141,
            "unit": "iter/sec",
            "range": "stddev: 0.00014421230284859847",
            "extra": "mean: 982.7098456079042 usec\nrounds: 1127"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 452.0582079168593,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202313613988082",
            "extra": "mean: 2.2121045088598765 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 366.27520067168746,
            "unit": "iter/sec",
            "range": "stddev: 0.0003773946099138898",
            "extra": "mean: 2.7301875698004325 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 1042.727825671829,
            "unit": "iter/sec",
            "range": "stddev: 0.00013898960803284882",
            "extra": "mean: 959.023031111403 usec\nrounds: 1125"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 451.58819974270716,
            "unit": "iter/sec",
            "range": "stddev: 0.00029623751956844656",
            "extra": "mean: 2.2144068436016506 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 335.8172328230315,
            "unit": "iter/sec",
            "range": "stddev: 0.000372997933469344",
            "extra": "mean: 2.9778102558750423 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 983.8144276002638,
            "unit": "iter/sec",
            "range": "stddev: 0.00015849578374958387",
            "extra": "mean: 1.0164518550914285 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 410.4632959912802,
            "unit": "iter/sec",
            "range": "stddev: 0.00034017187203996813",
            "extra": "mean: 2.4362714273513113 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 300.89707736430717,
            "unit": "iter/sec",
            "range": "stddev: 0.0003992738045383842",
            "extra": "mean: 3.323395523676899 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1342.4177456499344,
            "unit": "iter/sec",
            "range": "stddev: 0.00011344291801937248",
            "extra": "mean: 744.9245983528383 usec\nrounds: 1093"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1177.0340095205154,
            "unit": "iter/sec",
            "range": "stddev: 0.0001291916644442944",
            "extra": "mean: 849.593122978126 usec\nrounds: 927"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 704.0401328171242,
            "unit": "iter/sec",
            "range": "stddev: 0.00018342820299075058",
            "extra": "mean: 1.4203735744418877 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 809.541819890594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747877950770712",
            "extra": "mean: 1.23526663531125 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1157.7275671401126,
            "unit": "iter/sec",
            "range": "stddev: 0.00011862436555380014",
            "extra": "mean: 863.7610681330319 usec\nrounds: 910"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 1000.4005524640056,
            "unit": "iter/sec",
            "range": "stddev: 0.00013486839221587554",
            "extra": "mean: 999.599607914031 usec\nrounds: 834"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 638.4749264778661,
            "unit": "iter/sec",
            "range": "stddev: 0.00020222740695622317",
            "extra": "mean: 1.566232217632225 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 640.8268061721623,
            "unit": "iter/sec",
            "range": "stddev: 0.0002122628196853645",
            "extra": "mean: 1.5604840346384379 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 784.3610263909453,
            "unit": "iter/sec",
            "range": "stddev: 0.0001667542821982236",
            "extra": "mean: 1.2749231111102848 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 728.4826090086924,
            "unit": "iter/sec",
            "range": "stddev: 0.00018583533533128775",
            "extra": "mean: 1.3727163663670492 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 503.2047916902869,
            "unit": "iter/sec",
            "range": "stddev: 0.00023893829978737858",
            "extra": "mean: 1.9872624754644252 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 557.5538138096764,
            "unit": "iter/sec",
            "range": "stddev: 0.00021606282855465665",
            "extra": "mean: 1.7935488471815113 msec\nrounds: 674"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "d82e135dd4f1d003b3e34490452b2efadd4f3009",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/d82e135dd4f1d003b3e34490452b2efadd4f3009"
        },
        "date": 1609863708562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 1268.3996447683367,
            "unit": "iter/sec",
            "range": "stddev: 0.000058712850234886554",
            "extra": "mean: 788.3950489300572 usec\nrounds: 1124"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 445.23315625617295,
            "unit": "iter/sec",
            "range": "stddev: 0.00012843487717541965",
            "extra": "mean: 2.2460142196252604 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1048.3975016212303,
            "unit": "iter/sec",
            "range": "stddev: 0.00013409712833013427",
            "extra": "mean: 953.8366873763158 usec\nrounds: 1014"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 1212.73680398232,
            "unit": "iter/sec",
            "range": "stddev: 0.00009100659695252469",
            "extra": "mean: 824.5812254697422 usec\nrounds: 958"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 428.61108888383694,
            "unit": "iter/sec",
            "range": "stddev: 0.00022818168677385072",
            "extra": "mean: 2.333117424946096 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 408.8981333944433,
            "unit": "iter/sec",
            "range": "stddev: 0.00023224041805899762",
            "extra": "mean: 2.445596881791952 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 1239.3280125861777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000715198230201785",
            "extra": "mean: 806.8888864322868 usec\nrounds: 995"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 416.4329663908078,
            "unit": "iter/sec",
            "range": "stddev: 0.0001975620968153858",
            "extra": "mean: 2.4013468690217357 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 421.2491010223094,
            "unit": "iter/sec",
            "range": "stddev: 0.00012625910410911265",
            "extra": "mean: 2.3738923064123996 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 1236.9892346610095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000909285703945214",
            "extra": "mean: 808.4144728018146 usec\nrounds: 1250"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 428.89394160124016,
            "unit": "iter/sec",
            "range": "stddev: 0.00014397964290605218",
            "extra": "mean: 2.3315787494376403 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 367.87474282935943,
            "unit": "iter/sec",
            "range": "stddev: 0.00018074904409642466",
            "extra": "mean: 2.71831654521565 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 1205.1370629609387,
            "unit": "iter/sec",
            "range": "stddev: 0.00010082549751133843",
            "extra": "mean: 829.7811350545214 usec\nrounds: 1007"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 429.29017643959935,
            "unit": "iter/sec",
            "range": "stddev: 0.0001710266951609219",
            "extra": "mean: 2.3294267022220083 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 343.29277908740966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003207823495148196",
            "extra": "mean: 2.912965436262144 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1522.037494765721,
            "unit": "iter/sec",
            "range": "stddev: 0.00008592963047665231",
            "extra": "mean: 657.0140377218004 usec\nrounds: 1246"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1360.2357695085723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000722544555171874",
            "extra": "mean: 735.1666692027085 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 598.207301091884,
            "unit": "iter/sec",
            "range": "stddev: 0.0001766471532409648",
            "extra": "mean: 1.6716613090056571 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 928.7071665298266,
            "unit": "iter/sec",
            "range": "stddev: 0.00008359784222661651",
            "extra": "mean: 1.0767656760274218 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1264.8318368174428,
            "unit": "iter/sec",
            "range": "stddev: 0.0001045398742749",
            "extra": "mean: 790.6189351749637 usec\nrounds: 1049"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 1157.9519049721225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012120095317112015",
            "extra": "mean: 863.5937258759246 usec\nrounds: 1171"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 540.8179051630894,
            "unit": "iter/sec",
            "range": "stddev: 0.00017094886762980804",
            "extra": "mean: 1.8490512064286022 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 754.5724836176328,
            "unit": "iter/sec",
            "range": "stddev: 0.00019605098034310118",
            "extra": "mean: 1.3252537320281264 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 918.20151267487,
            "unit": "iter/sec",
            "range": "stddev: 0.00009442196404611435",
            "extra": "mean: 1.0890855506073365 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 838.3030421133462,
            "unit": "iter/sec",
            "range": "stddev: 0.00009910751237899359",
            "extra": "mean: 1.1928860445013043 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 451.51794068664947,
            "unit": "iter/sec",
            "range": "stddev: 0.00017354355734294292",
            "extra": "mean: 2.214751419354992 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 671.2655992274555,
            "unit": "iter/sec",
            "range": "stddev: 0.00009945844655574496",
            "extra": "mean: 1.4897232945511842 msec\nrounds: 679"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "85ac4e333b188439a27e4e5e8f4797c4ac4b96be",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/85ac4e333b188439a27e4e5e8f4797c4ac4b96be"
        },
        "date": 1609863876071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 931.1521625465483,
            "unit": "iter/sec",
            "range": "stddev: 0.00009061844790236233",
            "extra": "mean: 1.0739383316956104 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 422.46293743152336,
            "unit": "iter/sec",
            "range": "stddev: 0.00018367737974706738",
            "extra": "mean: 2.3670715497074557 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1001.8242850264091,
            "unit": "iter/sec",
            "range": "stddev: 0.00009266886056273747",
            "extra": "mean: 998.1790369292545 usec\nrounds: 1029"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 946.7074473791008,
            "unit": "iter/sec",
            "range": "stddev: 0.00009090835925490883",
            "extra": "mean: 1.0562925249700277 msec\nrounds: 821"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 425.80679155834673,
            "unit": "iter/sec",
            "range": "stddev: 0.00016939797825640018",
            "extra": "mean: 2.348482973557677 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 363.4762239763869,
            "unit": "iter/sec",
            "range": "stddev: 0.0001955206757284503",
            "extra": "mean: 2.75121158974339 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 943.8909105195798,
            "unit": "iter/sec",
            "range": "stddev: 0.00008630162193451201",
            "extra": "mean: 1.0594444642437906 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 420.326458463757,
            "unit": "iter/sec",
            "range": "stddev: 0.00019592448643882587",
            "extra": "mean: 2.3791031467656842 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 344.6787035130923,
            "unit": "iter/sec",
            "range": "stddev: 0.0002443725340335553",
            "extra": "mean: 2.9012526442963598 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 939.3735572800175,
            "unit": "iter/sec",
            "range": "stddev: 0.00009078832086564043",
            "extra": "mean: 1.0645392264346123 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 421.41021882772696,
            "unit": "iter/sec",
            "range": "stddev: 0.00017422660138889952",
            "extra": "mean: 2.372984695961541 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 318.8637382502745,
            "unit": "iter/sec",
            "range": "stddev: 0.00021635341802686965",
            "extra": "mean: 3.136135847517115 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 922.4157472977574,
            "unit": "iter/sec",
            "range": "stddev: 0.00009665555520606327",
            "extra": "mean: 1.0841098527746604 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 428.2284120517793,
            "unit": "iter/sec",
            "range": "stddev: 0.00015787678047188646",
            "extra": "mean: 2.3352023636373875 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 278.40583603432236,
            "unit": "iter/sec",
            "range": "stddev: 0.0002975820966100645",
            "extra": "mean: 3.591878727271788 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1290.9896107432944,
            "unit": "iter/sec",
            "range": "stddev: 0.00006628027626807075",
            "extra": "mean: 774.5995720478684 usec\nrounds: 923"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1067.9037745006183,
            "unit": "iter/sec",
            "range": "stddev: 0.00008427174729911076",
            "extra": "mean: 936.4139577722046 usec\nrounds: 1113"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 628.8273483853693,
            "unit": "iter/sec",
            "range": "stddev: 0.0001421240934248675",
            "extra": "mean: 1.5902616235882319 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 684.6068691261213,
            "unit": "iter/sec",
            "range": "stddev: 0.0002808117956192206",
            "extra": "mean: 1.4606923259132178 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1060.5362413861696,
            "unit": "iter/sec",
            "range": "stddev: 0.00007110157798168364",
            "extra": "mean: 942.9192148049123 usec\nrounds: 824"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 941.1623386325324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000909787125852512",
            "extra": "mean: 1.0625159538926685 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 566.5168360169628,
            "unit": "iter/sec",
            "range": "stddev: 0.00015975753220173644",
            "extra": "mean: 1.7651726063972755 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 569.6358946584766,
            "unit": "iter/sec",
            "range": "stddev: 0.00012642156523820993",
            "extra": "mean: 1.755507350181201 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 748.0038994500819,
            "unit": "iter/sec",
            "range": "stddev: 0.00009394805964889317",
            "extra": "mean: 1.3368914262815752 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 657.430144416454,
            "unit": "iter/sec",
            "range": "stddev: 0.00010777316687289289",
            "extra": "mean: 1.521074152886033 msec\nrounds: 641"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 460.35815670454036,
            "unit": "iter/sec",
            "range": "stddev: 0.00018782120006383655",
            "extra": "mean: 2.1722217482980404 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 552.6435877952514,
            "unit": "iter/sec",
            "range": "stddev: 0.0001499090567847012",
            "extra": "mean: 1.8094844888899522 msec\nrounds: 540"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "f0891e180af8d10a03ffee08c42f40c43fcb768c",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/f0891e180af8d10a03ffee08c42f40c43fcb768c"
        },
        "date": 1609863936280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 1000.4104244761886,
            "unit": "iter/sec",
            "range": "stddev: 0.00013479456239021422",
            "extra": "mean: 999.5897439029552 usec\nrounds: 902"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 470.7609941433105,
            "unit": "iter/sec",
            "range": "stddev: 0.00026783429722855405",
            "extra": "mean: 2.1242201721062237 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1142.4516644811797,
            "unit": "iter/sec",
            "range": "stddev: 0.00010863675549241726",
            "extra": "mean: 875.3105545643622 usec\nrounds: 1008"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 886.4566024926992,
            "unit": "iter/sec",
            "range": "stddev: 0.00010737089831874202",
            "extra": "mean: 1.1280868089740872 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 403.93421737566496,
            "unit": "iter/sec",
            "range": "stddev: 0.00022381428169487494",
            "extra": "mean: 2.47565063068174 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 366.9480770796674,
            "unit": "iter/sec",
            "range": "stddev: 0.0003367435729692501",
            "extra": "mean: 2.7251811971830877 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 934.2775065938838,
            "unit": "iter/sec",
            "range": "stddev: 0.0001159442610221454",
            "extra": "mean: 1.0703457944157535 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 411.94106136335535,
            "unit": "iter/sec",
            "range": "stddev: 0.00022808253679564586",
            "extra": "mean: 2.427531736434362 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 349.0676777789725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002627127421476696",
            "extra": "mean: 2.8647739783950836 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 883.7849950286405,
            "unit": "iter/sec",
            "range": "stddev: 0.00011357394039575265",
            "extra": "mean: 1.1314969202069256 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 387.2537887723416,
            "unit": "iter/sec",
            "range": "stddev: 0.00009904914459655781",
            "extra": "mean: 2.5822859039550394 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 288.69444689997914,
            "unit": "iter/sec",
            "range": "stddev: 0.00017825728548260755",
            "extra": "mean: 3.463869882978592 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 849.7111352946722,
            "unit": "iter/sec",
            "range": "stddev: 0.00005850419689217123",
            "extra": "mean: 1.1768705368951167 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 396.33308805869365,
            "unit": "iter/sec",
            "range": "stddev: 0.00014758306813682166",
            "extra": "mean: 2.523130241025721 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 273.2626634237669,
            "unit": "iter/sec",
            "range": "stddev: 0.00014151045196241632",
            "extra": "mean: 3.65948273895447 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1191.4280004716493,
            "unit": "iter/sec",
            "range": "stddev: 0.000040340030434683585",
            "extra": "mean: 839.328939393846 usec\nrounds: 891"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1025.4622270985446,
            "unit": "iter/sec",
            "range": "stddev: 0.000054656713157849255",
            "extra": "mean: 975.1700000003045 usec\nrounds: 992"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 615.8848954936262,
            "unit": "iter/sec",
            "range": "stddev: 0.00009181900299279069",
            "extra": "mean: 1.6236800209209694 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 699.1008315766954,
            "unit": "iter/sec",
            "range": "stddev: 0.00006077180323251956",
            "extra": "mean: 1.4304088263558217 msec\nrounds: 645"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1004.002751375819,
            "unit": "iter/sec",
            "range": "stddev: 0.00004450022046487403",
            "extra": "mean: 996.0132067662823 usec\nrounds: 798"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 886.4297038020125,
            "unit": "iter/sec",
            "range": "stddev: 0.00005786811546289936",
            "extra": "mean: 1.1281210407445392 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 543.9238086241027,
            "unit": "iter/sec",
            "range": "stddev: 0.00008716781737326511",
            "extra": "mean: 1.8384927891455558 msec\nrounds: 645"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 559.0160235345111,
            "unit": "iter/sec",
            "range": "stddev: 0.00009246341698576733",
            "extra": "mean: 1.7888574886946234 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 718.8176408946052,
            "unit": "iter/sec",
            "range": "stddev: 0.00006112968287031015",
            "extra": "mean: 1.391173425787727 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 682.5027867986985,
            "unit": "iter/sec",
            "range": "stddev: 0.000172233509522846",
            "extra": "mean: 1.4651954824837163 msec\nrounds: 628"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 522.1758440454448,
            "unit": "iter/sec",
            "range": "stddev: 0.0002310837333655191",
            "extra": "mean: 1.9150636924387683 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 598.6699598186392,
            "unit": "iter/sec",
            "range": "stddev: 0.00021713545230528128",
            "extra": "mean: 1.6703694307677297 msec\nrounds: 520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "36074995339884ad29b0e0d3c06e4b4fa4325630",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/36074995339884ad29b0e0d3c06e4b4fa4325630"
        },
        "date": 1609864045474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 825.3486419149285,
            "unit": "iter/sec",
            "range": "stddev: 0.000047902034697215536",
            "extra": "mean: 1.2116091906080502 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 382.8327678097239,
            "unit": "iter/sec",
            "range": "stddev: 0.00006840596652752721",
            "extra": "mean: 2.6121066013268264 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 917.4526641151746,
            "unit": "iter/sec",
            "range": "stddev: 0.00006593907486439705",
            "extra": "mean: 1.0899744903617858 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 835.1308610608176,
            "unit": "iter/sec",
            "range": "stddev: 0.00007259127516417131",
            "extra": "mean: 1.1974171314059199 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 395.9782525998293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001713691966308777",
            "extra": "mean: 2.5253912138720094 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 325.97569993865557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001710633972092824",
            "extra": "mean: 3.0677133301291692 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 845.7836349085834,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112040511272812",
            "extra": "mean: 1.1823354800522774 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 384.5478217896572,
            "unit": "iter/sec",
            "range": "stddev: 0.0001272664984137679",
            "extra": "mean: 2.600456804945803 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 325.064897175132,
            "unit": "iter/sec",
            "range": "stddev: 0.00016396211391165002",
            "extra": "mean: 3.076308788460908 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 873.9394451037435,
            "unit": "iter/sec",
            "range": "stddev: 0.00010000258742667722",
            "extra": "mean: 1.1442440384199526 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 385.2603985672684,
            "unit": "iter/sec",
            "range": "stddev: 0.00014643808029644593",
            "extra": "mean: 2.595647005814419 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 274.3478813301088,
            "unit": "iter/sec",
            "range": "stddev: 0.000348474485893384",
            "extra": "mean: 3.6450071899653236 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 808.812509943698,
            "unit": "iter/sec",
            "range": "stddev: 0.00005084516522964385",
            "extra": "mean: 1.2363804808973722 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 380.7407094240234,
            "unit": "iter/sec",
            "range": "stddev: 0.00013517330835030312",
            "extra": "mean: 2.6264593600006134 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 268.60868725759644,
            "unit": "iter/sec",
            "range": "stddev: 0.00022663176823135424",
            "extra": "mean: 3.7228877822592437 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1213.23504260747,
            "unit": "iter/sec",
            "range": "stddev: 0.00005882308904934638",
            "extra": "mean: 824.2425951123306 usec\nrounds: 368"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 999.6640008529237,
            "unit": "iter/sec",
            "range": "stddev: 0.00020265132246747775",
            "extra": "mean: 1.0003361120804488 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 565.9310929349292,
            "unit": "iter/sec",
            "range": "stddev: 0.00004881098848995681",
            "extra": "mean: 1.7669995737713955 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 660.9179289665572,
            "unit": "iter/sec",
            "range": "stddev: 0.00004762961079470939",
            "extra": "mean: 1.5130471669359127 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 953.7787599263636,
            "unit": "iter/sec",
            "range": "stddev: 0.00010073756362098352",
            "extra": "mean: 1.0484611757103972 msec\nrounds: 774"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 829.1233043608619,
            "unit": "iter/sec",
            "range": "stddev: 0.00003550974272294692",
            "extra": "mean: 1.206093224904419 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 515.8810557912905,
            "unit": "iter/sec",
            "range": "stddev: 0.00006006901685986272",
            "extra": "mean: 1.9384313278690524 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 537.7293907350812,
            "unit": "iter/sec",
            "range": "stddev: 0.000028320179054514576",
            "extra": "mean: 1.8596714578553915 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 688.1391971129656,
            "unit": "iter/sec",
            "range": "stddev: 0.000025502765892056614",
            "extra": "mean: 1.453194359797294 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 613.1438309031065,
            "unit": "iter/sec",
            "range": "stddev: 0.000047132447104094737",
            "extra": "mean: 1.6309386959452705 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 418.76487456925304,
            "unit": "iter/sec",
            "range": "stddev: 0.00006219459073464303",
            "extra": "mean: 2.3879748773786553 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 483.07067874772196,
            "unit": "iter/sec",
            "range": "stddev: 0.00004512879848286848",
            "extra": "mean: 2.070090452586211 msec\nrounds: 464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "31124d582d6a2ece4c3777d60859d3f03c2c04f2",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/31124d582d6a2ece4c3777d60859d3f03c2c04f2"
        },
        "date": 1609864075543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 808.7394379135196,
            "unit": "iter/sec",
            "range": "stddev: 0.000013343869927176953",
            "extra": "mean: 1.2364921915764573 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 378.85353822699614,
            "unit": "iter/sec",
            "range": "stddev: 0.000009677172100724079",
            "extra": "mean: 2.6395424592836556 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 894.6954983838295,
            "unit": "iter/sec",
            "range": "stddev: 0.000009277361536034931",
            "extra": "mean: 1.1176987050973115 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 800.1220968020809,
            "unit": "iter/sec",
            "range": "stddev: 0.000020212201625441124",
            "extra": "mean: 1.2498092528587685 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 372.81406850150796,
            "unit": "iter/sec",
            "range": "stddev: 0.00001570336042612337",
            "extra": "mean: 2.6823022103736816 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 308.5478191557508,
            "unit": "iter/sec",
            "range": "stddev: 0.00000787352516571072",
            "extra": "mean: 3.240988715253934 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 808.3583830057867,
            "unit": "iter/sec",
            "range": "stddev: 0.00000904657226162374",
            "extra": "mean: 1.2370750659894392 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 370.81481959540304,
            "unit": "iter/sec",
            "range": "stddev: 0.000015231408486312432",
            "extra": "mean: 2.6967638485729952 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 307.13830662908435,
            "unit": "iter/sec",
            "range": "stddev: 0.000010975885563105843",
            "extra": "mean: 3.2558621911256753 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 809.5355474964649,
            "unit": "iter/sec",
            "range": "stddev: 0.000004217274177977137",
            "extra": "mean: 1.2352762063291196 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 368.86351529019515,
            "unit": "iter/sec",
            "range": "stddev: 0.000017802112437649052",
            "extra": "mean: 2.711029848569524 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 272.43604507262916,
            "unit": "iter/sec",
            "range": "stddev: 0.00002013553552589848",
            "extra": "mean: 3.6705862461533254 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 792.7487863340916,
            "unit": "iter/sec",
            "range": "stddev: 0.00003918660424160362",
            "extra": "mean: 1.2614336562081667 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 367.8833961218255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000449420045882106",
            "extra": "mean: 2.7182526054229625 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 252.85219329109592,
            "unit": "iter/sec",
            "range": "stddev: 0.00000974060804728101",
            "extra": "mean: 3.954879674896672 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1161.8824870069595,
            "unit": "iter/sec",
            "range": "stddev: 0.000029542782000672312",
            "extra": "mean: 860.6722376683952 usec\nrounds: 892"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 970.0817889224904,
            "unit": "iter/sec",
            "range": "stddev: 0.000003874569613161642",
            "extra": "mean: 1.0308409161156824 msec\nrounds: 906"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 557.1484066944449,
            "unit": "iter/sec",
            "range": "stddev: 0.000038415443371160136",
            "extra": "mean: 1.7948539168100441 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 648.1455093745014,
            "unit": "iter/sec",
            "range": "stddev: 0.000010423726683500981",
            "extra": "mean: 1.5428634242410457 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 944.0813355644657,
            "unit": "iter/sec",
            "range": "stddev: 0.000026177357999277565",
            "extra": "mean: 1.0592307699866776 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 824.3175365469574,
            "unit": "iter/sec",
            "range": "stddev: 0.000005686165655462708",
            "extra": "mean: 1.2131247433955747 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 497.98273132984235,
            "unit": "iter/sec",
            "range": "stddev: 0.00003935160699439406",
            "extra": "mean: 2.008101761540086 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 536.8168302479853,
            "unit": "iter/sec",
            "range": "stddev: 0.000008377668440872577",
            "extra": "mean: 1.8628328019038538 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 675.8882545274164,
            "unit": "iter/sec",
            "range": "stddev: 0.00005309607965533413",
            "extra": "mean: 1.4795345137329006 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 608.2379357735265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050083644104661295",
            "extra": "mean: 1.6440934397297173 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 409.7028108554489,
            "unit": "iter/sec",
            "range": "stddev: 0.00003389503927394283",
            "extra": "mean: 2.440793603324385 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 480.60420405461014,
            "unit": "iter/sec",
            "range": "stddev: 0.00000611157973185329",
            "extra": "mean: 2.080714216737005 msec\nrounds: 466"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "6eb9e3693adce5f0714025f081539d4a70004025",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/6eb9e3693adce5f0714025f081539d4a70004025"
        },
        "date": 1609864123997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 875.2108053531543,
            "unit": "iter/sec",
            "range": "stddev: 0.00010041222764927344",
            "extra": "mean: 1.1425818715714922 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 415.56059649123904,
            "unit": "iter/sec",
            "range": "stddev: 0.00018925608928442242",
            "extra": "mean: 2.406387921384847 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 937.215696242875,
            "unit": "iter/sec",
            "range": "stddev: 0.00008763959334430187",
            "extra": "mean: 1.0669902392894353 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 851.8283853815511,
            "unit": "iter/sec",
            "range": "stddev: 0.00008947831841306367",
            "extra": "mean: 1.1739453828508895 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 383.43361129377666,
            "unit": "iter/sec",
            "range": "stddev: 0.00009897762977329737",
            "extra": "mean: 2.6080134097420755 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 315.7816097598613,
            "unit": "iter/sec",
            "range": "stddev: 0.00013355725796206268",
            "extra": "mean: 3.166745526316299 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 848.8593513928544,
            "unit": "iter/sec",
            "range": "stddev: 0.00007680278443126413",
            "extra": "mean: 1.1780514620698304 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 373.30789365846795,
            "unit": "iter/sec",
            "range": "stddev: 0.00007438649781286144",
            "extra": "mean: 2.6787539641872145 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 320.0182866129684,
            "unit": "iter/sec",
            "range": "stddev: 0.00016033317646875283",
            "extra": "mean: 3.1248214299997317 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 847.3018866064971,
            "unit": "iter/sec",
            "range": "stddev: 0.00008841554838557604",
            "extra": "mean: 1.1802168929483556 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 393.4299681789758,
            "unit": "iter/sec",
            "range": "stddev: 0.00018074548101164624",
            "extra": "mean: 2.541748420001113 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 278.0629276652276,
            "unit": "iter/sec",
            "range": "stddev: 0.00017603066198771406",
            "extra": "mean: 3.596308247189085 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 835.3782220685409,
            "unit": "iter/sec",
            "range": "stddev: 0.00008092744023214701",
            "extra": "mean: 1.1970625682865266 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 375.4895106086483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000944443075617671",
            "extra": "mean: 2.663190240332024 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 276.2881026602379,
            "unit": "iter/sec",
            "range": "stddev: 0.0002679876950127877",
            "extra": "mean: 3.6194102835826363 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1171.1773673047144,
            "unit": "iter/sec",
            "range": "stddev: 0.00025991404479900563",
            "extra": "mean: 853.8416365587282 usec\nrounds: 941"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1001.9660172257047,
            "unit": "iter/sec",
            "range": "stddev: 0.00006505796349020735",
            "extra": "mean: 998.0378404138412 usec\nrounds: 965"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 569.5939199281463,
            "unit": "iter/sec",
            "range": "stddev: 0.00005864007037073214",
            "extra": "mean: 1.7556367176920518 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 651.9586069471491,
            "unit": "iter/sec",
            "range": "stddev: 0.000026542738099158288",
            "extra": "mean: 1.5338397090615676 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 957.6113423118918,
            "unit": "iter/sec",
            "range": "stddev: 0.00009347533361429192",
            "extra": "mean: 1.0442649912497615 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 834.5466520960673,
            "unit": "iter/sec",
            "range": "stddev: 0.00005589343953567806",
            "extra": "mean: 1.198255361145331 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 545.6739687097615,
            "unit": "iter/sec",
            "range": "stddev: 0.0001534803032269651",
            "extra": "mean: 1.832596123953807 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 571.7523162335946,
            "unit": "iter/sec",
            "range": "stddev: 0.00012548054064201466",
            "extra": "mean: 1.749009092936391 msec\nrounds: 538"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 730.2882977313151,
            "unit": "iter/sec",
            "range": "stddev: 0.00010150958291908405",
            "extra": "mean: 1.3693222294627487 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 669.9014796549785,
            "unit": "iter/sec",
            "range": "stddev: 0.00014661733724286472",
            "extra": "mean: 1.4927568162933944 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 462.52827566681344,
            "unit": "iter/sec",
            "range": "stddev: 0.0001883436244767736",
            "extra": "mean: 2.1620299830498566 msec\nrounds: 590"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 533.1387656736964,
            "unit": "iter/sec",
            "range": "stddev: 0.00016687426898877317",
            "extra": "mean: 1.8756842765623283 msec\nrounds: 640"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "424f50226cc9107feb66da597d5bfcf863744e9e",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/424f50226cc9107feb66da597d5bfcf863744e9e"
        },
        "date": 1609864217537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 811.5163629798396,
            "unit": "iter/sec",
            "range": "stddev: 0.000022416438082932215",
            "extra": "mean: 1.2322610431760854 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 378.4134173478308,
            "unit": "iter/sec",
            "range": "stddev: 0.00004088236397910999",
            "extra": "mean: 2.6426124290429645 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 887.0333534496522,
            "unit": "iter/sec",
            "range": "stddev: 0.000017132046263564477",
            "extra": "mean: 1.1273533245520286 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 809.1241042259505,
            "unit": "iter/sec",
            "range": "stddev: 0.00005097433710256221",
            "extra": "mean: 1.2359043498730655 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 375.64500364235596,
            "unit": "iter/sec",
            "range": "stddev: 0.000055216871315387206",
            "extra": "mean: 2.662087849708444 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 308.6283315233117,
            "unit": "iter/sec",
            "range": "stddev: 0.000025061664762850018",
            "extra": "mean: 3.2401432333326357 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 808.5579414660673,
            "unit": "iter/sec",
            "range": "stddev: 0.000015949470498343105",
            "extra": "mean: 1.2367697461319993 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 371.46698554691017,
            "unit": "iter/sec",
            "range": "stddev: 0.000027305278667822555",
            "extra": "mean: 2.6920292755699458 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 307.86666886742216,
            "unit": "iter/sec",
            "range": "stddev: 0.000038196091084614174",
            "extra": "mean: 3.248159353134243 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 811.5907670062585,
            "unit": "iter/sec",
            "range": "stddev: 0.000021287857614725128",
            "extra": "mean: 1.2321480734542272 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 368.0036009119734,
            "unit": "iter/sec",
            "range": "stddev: 0.00007074645681319754",
            "extra": "mean: 2.7173647146979962 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 271.0207692093269,
            "unit": "iter/sec",
            "range": "stddev: 0.00002382051051748915",
            "extra": "mean: 3.6897541207538795 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 795.0965299256828,
            "unit": "iter/sec",
            "range": "stddev: 0.000016845431324959573",
            "extra": "mean: 1.2577089225800915 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 370.7633365469358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004938261888381376",
            "extra": "mean: 2.6971383128477364 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 251.00017778519825,
            "unit": "iter/sec",
            "range": "stddev: 0.00017541258937941675",
            "extra": "mean: 3.9840609230794377 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1152.7422125300438,
            "unit": "iter/sec",
            "range": "stddev: 0.00007961776195495023",
            "extra": "mean: 867.4966433346754 usec\nrounds: 900"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 969.1617395328959,
            "unit": "iter/sec",
            "range": "stddev: 0.000009396171992864252",
            "extra": "mean: 1.0318195190845723 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 569.66119154666,
            "unit": "iter/sec",
            "range": "stddev: 0.000057057637146710784",
            "extra": "mean: 1.755429393539952 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 653.150623309141,
            "unit": "iter/sec",
            "range": "stddev: 0.000039519015913897904",
            "extra": "mean: 1.53104041290441 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 963.5633875299166,
            "unit": "iter/sec",
            "range": "stddev: 0.000025057473721821404",
            "extra": "mean: 1.0378144426631737 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 827.4121910950655,
            "unit": "iter/sec",
            "range": "stddev: 0.000023591594045819502",
            "extra": "mean: 1.208587461923322 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 508.8411746853163,
            "unit": "iter/sec",
            "range": "stddev: 0.00006285545152736092",
            "extra": "mean: 1.9652497670190157 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 542.9429369749901,
            "unit": "iter/sec",
            "range": "stddev: 0.00005047102283896374",
            "extra": "mean: 1.841814179536999 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 691.351254680677,
            "unit": "iter/sec",
            "range": "stddev: 0.00003721173325942868",
            "extra": "mean: 1.4464427354831118 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 613.987523940013,
            "unit": "iter/sec",
            "range": "stddev: 0.00004743501664040094",
            "extra": "mean: 1.6286975891348903 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 416.5977943159232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000790391481452327",
            "extra": "mean: 2.4003967703238946 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 484.17347063518184,
            "unit": "iter/sec",
            "range": "stddev: 0.000045983815611949015",
            "extra": "mean: 2.0653754504312496 msec\nrounds: 464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "024a2783244e7ca51cb0d5f0ccf9b6d729919736",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/024a2783244e7ca51cb0d5f0ccf9b6d729919736"
        },
        "date": 1609864784814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 970.8294251474633,
            "unit": "iter/sec",
            "range": "stddev: 0.000003953424277136526",
            "extra": "mean: 1.0300470650115552 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 445.8413402983133,
            "unit": "iter/sec",
            "range": "stddev: 0.000010457734357193178",
            "extra": "mean: 2.242950371831598 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1062.0572513267248,
            "unit": "iter/sec",
            "range": "stddev: 0.000009106348020871741",
            "extra": "mean: 941.5688266812333 usec\nrounds: 952"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 966.1889644046779,
            "unit": "iter/sec",
            "range": "stddev: 0.000004411482041817605",
            "extra": "mean: 1.0349942266378036 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 441.5963687246932,
            "unit": "iter/sec",
            "range": "stddev: 0.000009487914874683219",
            "extra": "mean: 2.2645113746925656 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 367.7903531843843,
            "unit": "iter/sec",
            "range": "stddev: 0.0002971646559070459",
            "extra": "mean: 2.718940264044039 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 969.0898872156351,
            "unit": "iter/sec",
            "range": "stddev: 0.000005472364600211088",
            "extra": "mean: 1.0318960224352098 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 438.55200936220683,
            "unit": "iter/sec",
            "range": "stddev: 0.000013112819978108187",
            "extra": "mean: 2.2802312579853776 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 367.6751579761727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004223717850170132",
            "extra": "mean: 2.719792127116745 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 970.6274104680098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065880542136482524",
            "extra": "mean: 1.0302614465810598 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 435.5125113681714,
            "unit": "iter/sec",
            "range": "stddev: 0.00000998035120099304",
            "extra": "mean: 2.2961452860641813 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.78917270676556,
            "unit": "iter/sec",
            "range": "stddev: 0.000025593138338626403",
            "extra": "mean: 3.0789203706086763 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 952.1728261995455,
            "unit": "iter/sec",
            "range": "stddev: 0.00001522139815849644",
            "extra": "mean: 1.0502295092702336 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 436.20320545761325,
            "unit": "iter/sec",
            "range": "stddev: 0.000008666351405201219",
            "extra": "mean: 2.2925095173267174 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 299.56802566756807,
            "unit": "iter/sec",
            "range": "stddev: 0.00027801850152373996",
            "extra": "mean: 3.3381399692826506 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 990.6844474824533,
            "unit": "iter/sec",
            "range": "stddev: 0.0005184898014959531",
            "extra": "mean: 1.0094031480369148 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1163.526509439581,
            "unit": "iter/sec",
            "range": "stddev: 0.000005470941725532107",
            "extra": "mean: 859.4561377734793 usec\nrounds: 1096"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 630.743449549829,
            "unit": "iter/sec",
            "range": "stddev: 0.000021838703603581885",
            "extra": "mean: 1.5854306544344057 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 750.0127343772526,
            "unit": "iter/sec",
            "range": "stddev: 0.000017449443405432124",
            "extra": "mean: 1.3333106948248228 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1113.6171839104907,
            "unit": "iter/sec",
            "range": "stddev: 0.00007204161819569155",
            "extra": "mean: 897.9746491415285 usec\nrounds: 932"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 988.8713411341479,
            "unit": "iter/sec",
            "range": "stddev: 0.00001108166965551337",
            "extra": "mean: 1.01125389967626 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 582.5135098973132,
            "unit": "iter/sec",
            "range": "stddev: 0.00004291662725354225",
            "extra": "mean: 1.716698382113545 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 626.4081001584323,
            "unit": "iter/sec",
            "range": "stddev: 0.00001353693366134232",
            "extra": "mean: 1.5964033666663606 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 800.6589392181186,
            "unit": "iter/sec",
            "range": "stddev: 0.000045830081304601506",
            "extra": "mean: 1.2489712548223684 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 721.8342347676548,
            "unit": "iter/sec",
            "range": "stddev: 0.000013383967042024592",
            "extra": "mean: 1.385359618364293 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 477.0095466955336,
            "unit": "iter/sec",
            "range": "stddev: 0.00004705350983134676",
            "extra": "mean: 2.096394101391605 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 574.2017008546703,
            "unit": "iter/sec",
            "range": "stddev: 0.000005888833891116668",
            "extra": "mean: 1.7415483070000497 msec\nrounds: 557"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "1085e3c2fc22c6c70bb0351cebe6e6240a22edcd",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/1085e3c2fc22c6c70bb0351cebe6e6240a22edcd"
        },
        "date": 1609881904329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 695.1377999598362,
            "unit": "iter/sec",
            "range": "stddev: 0.000005607119465917306",
            "extra": "mean: 1.4385636920590108 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 360.36176701969885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000304634232709607",
            "extra": "mean: 2.7749891678862144 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 814.9934772445997,
            "unit": "iter/sec",
            "range": "stddev: 0.000008255759668258781",
            "extra": "mean: 1.2270036852084831 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 693.2116064327478,
            "unit": "iter/sec",
            "range": "stddev: 0.000007247694576501666",
            "extra": "mean: 1.442560959338201 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 357.0385985864013,
            "unit": "iter/sec",
            "range": "stddev: 0.000013438211816911952",
            "extra": "mean: 2.800817625767164 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 288.2696484476604,
            "unit": "iter/sec",
            "range": "stddev: 0.00001087097340868396",
            "extra": "mean: 3.4689742932876424 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 694.6157899483453,
            "unit": "iter/sec",
            "range": "stddev: 0.000007994397746167037",
            "extra": "mean: 1.4396447856078316 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 354.9368677384237,
            "unit": "iter/sec",
            "range": "stddev: 0.000015632505047864392",
            "extra": "mean: 2.8174024478543767 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 286.9770101454878,
            "unit": "iter/sec",
            "range": "stddev: 0.000015269465007289838",
            "extra": "mean: 3.4845996879437604 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 693.5141743766818,
            "unit": "iter/sec",
            "range": "stddev: 0.000021293915665888738",
            "extra": "mean: 1.4419315955564749 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 350.35803372285915,
            "unit": "iter/sec",
            "range": "stddev: 0.00011636111705210537",
            "extra": "mean: 2.8542231196303085 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 251.92882575460231,
            "unit": "iter/sec",
            "range": "stddev: 0.00019978261713986695",
            "extra": "mean: 3.9693750685523996 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 682.7031650203606,
            "unit": "iter/sec",
            "range": "stddev: 0.000012300019440188231",
            "extra": "mean: 1.4647654372162997 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 352.7958424977506,
            "unit": "iter/sec",
            "range": "stddev: 0.000013836960920601813",
            "extra": "mean: 2.8345005227956332 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 236.18906453649922,
            "unit": "iter/sec",
            "range": "stddev: 0.000019584769160209646",
            "extra": "mean: 4.233896272727166 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1095.417993572515,
            "unit": "iter/sec",
            "range": "stddev: 0.0001546027590287228",
            "extra": "mean: 912.8935309330407 usec\nrounds: 889"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 925.6255568653748,
            "unit": "iter/sec",
            "range": "stddev: 0.000035651694724154304",
            "extra": "mean: 1.0803504641623052 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 482.6640080101337,
            "unit": "iter/sec",
            "range": "stddev: 0.0008394460555014811",
            "extra": "mean: 2.071834616636682 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 581.6553117744189,
            "unit": "iter/sec",
            "range": "stddev: 0.00042091030817065423",
            "extra": "mean: 1.71923126937389 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 890.7441719201332,
            "unit": "iter/sec",
            "range": "stddev: 0.00025177001824945155",
            "extra": "mean: 1.1226567981290851 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 784.5604172367803,
            "unit": "iter/sec",
            "range": "stddev: 0.000009066026826107258",
            "extra": "mean: 1.2745990978260124 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 472.7458748270273,
            "unit": "iter/sec",
            "range": "stddev: 0.00004228302599864939",
            "extra": "mean: 2.115301377015483 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 505.6053134763684,
            "unit": "iter/sec",
            "range": "stddev: 0.000014724973843398248",
            "extra": "mean: 1.9778273157857926 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 646.0868694260563,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315466513144599",
            "extra": "mean: 1.547779481864936 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 576.1202085432435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000300719549624542",
            "extra": "mean: 1.7357488683283018 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 388.5832945069028,
            "unit": "iter/sec",
            "range": "stddev: 0.000039235043742008164",
            "extra": "mean: 2.5734508254374684 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 455.7316240430473,
            "unit": "iter/sec",
            "range": "stddev: 0.0001170849703587461",
            "extra": "mean: 2.1942738823530545 msec\nrounds: 442"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "9450963ea9fbe013695d9714dd82dabb2d4d632a",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/9450963ea9fbe013695d9714dd82dabb2d4d632a"
        },
        "date": 1609882269622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 869.9593526744167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035363694290481226",
            "extra": "mean: 1.149478992237757 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 452.4882549081207,
            "unit": "iter/sec",
            "range": "stddev: 0.000009060581392009656",
            "extra": "mean: 2.2100021142052704 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1063.4751596420954,
            "unit": "iter/sec",
            "range": "stddev: 0.000006329581302247977",
            "extra": "mean: 940.3134534299255 usec\nrounds: 977"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 867.8597460213952,
            "unit": "iter/sec",
            "range": "stddev: 0.000003470064910801622",
            "extra": "mean: 1.1522599182464528 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 447.30960768651664,
            "unit": "iter/sec",
            "range": "stddev: 0.000009848248223457728",
            "extra": "mean: 2.2355880196090485 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.2280928564323,
            "unit": "iter/sec",
            "range": "stddev: 0.000008293280092806462",
            "extra": "mean: 2.701037601670551 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 868.9394084371282,
            "unit": "iter/sec",
            "range": "stddev: 0.000005512888091188015",
            "extra": "mean: 1.1508282284015603 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 444.8625464462321,
            "unit": "iter/sec",
            "range": "stddev: 0.000010148778950467764",
            "extra": "mean: 2.2478853479315415 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.59190549027437,
            "unit": "iter/sec",
            "range": "stddev: 0.00000782490017308987",
            "extra": "mean: 2.713027565458531 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 869.7030003724489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036019868154194983",
            "extra": "mean: 1.1498178108753812 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 441.97805564380735,
            "unit": "iter/sec",
            "range": "stddev: 0.00001705229517407547",
            "extra": "mean: 2.2625557699767467 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.7435515237448,
            "unit": "iter/sec",
            "range": "stddev: 0.000006576584638208463",
            "extra": "mean: 3.079352908804045 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 854.8392534377322,
            "unit": "iter/sec",
            "range": "stddev: 0.000004831051038020191",
            "extra": "mean: 1.169810576641754 msec\nrounds: 822"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 442.11420207739224,
            "unit": "iter/sec",
            "range": "stddev: 0.00000932895601554778",
            "extra": "mean: 2.261859029411929 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 302.74222871034175,
            "unit": "iter/sec",
            "range": "stddev: 0.000014869213502617452",
            "extra": "mean: 3.303140114479311 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1351.9460394657015,
            "unit": "iter/sec",
            "range": "stddev: 0.00023803190213132563",
            "extra": "mean: 739.6744920346133 usec\nrounds: 1067"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1163.3287735451122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036364913361144402",
            "extra": "mean: 859.60222315538 usec\nrounds: 1071"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 669.302482357449,
            "unit": "iter/sec",
            "range": "stddev: 0.00003063285142481431",
            "extra": "mean: 1.4940927702490396 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 776.6327548556608,
            "unit": "iter/sec",
            "range": "stddev: 0.000009494628608492164",
            "extra": "mean: 1.28760986933374 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1115.6129174479988,
            "unit": "iter/sec",
            "range": "stddev: 0.00008954604295975775",
            "extra": "mean: 896.3682513532856 usec\nrounds: 923"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 985.6470998201738,
            "unit": "iter/sec",
            "range": "stddev: 0.000004398477277037728",
            "extra": "mean: 1.014561905759622 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 602.2181760727271,
            "unit": "iter/sec",
            "range": "stddev: 0.00003223989657160696",
            "extra": "mean: 1.660527761751307 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 641.6223571764768,
            "unit": "iter/sec",
            "range": "stddev: 0.000009389468500779119",
            "extra": "mean: 1.5585491821086155 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 812.3786902503614,
            "unit": "iter/sec",
            "range": "stddev: 0.000018594548402295873",
            "extra": "mean: 1.2309530173567413 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 723.8303100268413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051870221419506965",
            "extra": "mean: 1.381539272599565 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 489.01168871451836,
            "unit": "iter/sec",
            "range": "stddev: 0.00003816614898376038",
            "extra": "mean: 2.0449408942120257 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.2920357591586,
            "unit": "iter/sec",
            "range": "stddev: 0.000006827895633157751",
            "extra": "mean: 1.73523133749833 msec\nrounds: 560"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "befe5ff01ea3463b364f76af3966b6897b187dd2",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/befe5ff01ea3463b364f76af3966b6897b187dd2"
        },
        "date": 1609882352697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 866.7307255285516,
            "unit": "iter/sec",
            "range": "stddev: 0.000028946981996789376",
            "extra": "mean: 1.1537608746824775 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 448.07208416407076,
            "unit": "iter/sec",
            "range": "stddev: 0.000007906766876510308",
            "extra": "mean: 2.231783758333468 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1063.7455092273638,
            "unit": "iter/sec",
            "range": "stddev: 0.000006409015968253099",
            "extra": "mean: 940.0744739466262 usec\nrounds: 998"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 866.9083416081307,
            "unit": "iter/sec",
            "range": "stddev: 0.000004364534521443963",
            "extra": "mean: 1.1535244869659251 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 443.3505420895542,
            "unit": "iter/sec",
            "range": "stddev: 0.000009398248290053265",
            "extra": "mean: 2.2555515445789305 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.5833976362642,
            "unit": "iter/sec",
            "range": "stddev: 0.000007311127164105845",
            "extra": "mean: 2.698447923944834 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 868.5067530166069,
            "unit": "iter/sec",
            "range": "stddev: 0.00000311217060013682",
            "extra": "mean: 1.1514015251196081 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 441.33982872549245,
            "unit": "iter/sec",
            "range": "stddev: 0.000008598937831198052",
            "extra": "mean: 2.265827679518104 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 369.11278024087187,
            "unit": "iter/sec",
            "range": "stddev: 0.000006432811636710447",
            "extra": "mean: 2.709199067416279 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 869.043139436084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033881225323539287",
            "extra": "mean: 1.1506908628827024 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 438.28116763361413,
            "unit": "iter/sec",
            "range": "stddev: 0.00001653114221885089",
            "extra": "mean: 2.2816403574884165 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 325.39614004185603,
            "unit": "iter/sec",
            "range": "stddev: 0.000006252926820796792",
            "extra": "mean: 3.0731772044725822 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 854.2595333519117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033753386965207278",
            "extra": "mean: 1.170604436893127 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 438.6190789652165,
            "unit": "iter/sec",
            "range": "stddev: 0.00000840608745041639",
            "extra": "mean: 2.279882585954047 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 302.6779382029525,
            "unit": "iter/sec",
            "range": "stddev: 0.00005665559103713197",
            "extra": "mean: 3.303841720137122 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1356.7380770052216,
            "unit": "iter/sec",
            "range": "stddev: 0.000019812460303037412",
            "extra": "mean: 737.0619406564731 usec\nrounds: 1129"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1153.7981344948853,
            "unit": "iter/sec",
            "range": "stddev: 0.00003680888308324047",
            "extra": "mean: 866.7027360360437 usec\nrounds: 1110"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 665.0408284674205,
            "unit": "iter/sec",
            "range": "stddev: 0.00003446636260379484",
            "extra": "mean: 1.503667079064137 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 774.7014287500289,
            "unit": "iter/sec",
            "range": "stddev: 0.000010742302590451796",
            "extra": "mean: 1.2908198731651852 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1151.3899864376956,
            "unit": "iter/sec",
            "range": "stddev: 0.00000731517751485668",
            "extra": "mean: 868.515456777522 usec\nrounds: 937"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 983.1377145288903,
            "unit": "iter/sec",
            "range": "stddev: 0.000006443089537880695",
            "extra": "mean: 1.017151498942536 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 603.0230465518213,
            "unit": "iter/sec",
            "range": "stddev: 0.000032861532478191384",
            "extra": "mean: 1.658311412338474 msec\nrounds: 616"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 642.6748226960916,
            "unit": "iter/sec",
            "range": "stddev: 0.000006011914653023566",
            "extra": "mean: 1.5559968504832504 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 828.106453759723,
            "unit": "iter/sec",
            "range": "stddev: 0.000010888099548324294",
            "extra": "mean: 1.2075742139912755 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 729.1779821961829,
            "unit": "iter/sec",
            "range": "stddev: 0.00000496869760085123",
            "extra": "mean: 1.371407289326179 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 494.8622143108906,
            "unit": "iter/sec",
            "range": "stddev: 0.000020048814800718306",
            "extra": "mean: 2.020764509960672 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 577.3249318211475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033667019816607117",
            "extra": "mean: 1.732126823010296 msec\nrounds: 565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "40545ddcc75c71211be4fb2658ad8178f99c1b16",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/40545ddcc75c71211be4fb2658ad8178f99c1b16"
        },
        "date": 1609882745680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 869.0537359845262,
            "unit": "iter/sec",
            "range": "stddev: 0.000005336809031949304",
            "extra": "mean: 1.1506768322756575 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.8124572236086,
            "unit": "iter/sec",
            "range": "stddev: 0.00000845378110644876",
            "extra": "mean: 2.2330776731846576 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1064.3973232247683,
            "unit": "iter/sec",
            "range": "stddev: 0.000005518701508598236",
            "extra": "mean: 939.4987925846468 usec\nrounds: 998"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 867.8002698485639,
            "unit": "iter/sec",
            "range": "stddev: 0.000003683040189333091",
            "extra": "mean: 1.15233889034686 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 443.1580728231115,
            "unit": "iter/sec",
            "range": "stddev: 0.000009468833830092463",
            "extra": "mean: 2.256531159704619 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.3693933877832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066277435992461846",
            "extra": "mean: 2.700007122221848 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 869.1875498740458,
            "unit": "iter/sec",
            "range": "stddev: 0.000004171177791164591",
            "extra": "mean: 1.1504996823124196 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 439.8072584393796,
            "unit": "iter/sec",
            "range": "stddev: 0.00003951678042208613",
            "extra": "mean: 2.2737232749373417 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 369.0472434287089,
            "unit": "iter/sec",
            "range": "stddev: 0.00000702537135906281",
            "extra": "mean: 2.7096801772837957 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 869.3256450163052,
            "unit": "iter/sec",
            "range": "stddev: 0.000003842620149394661",
            "extra": "mean: 1.1503169217804956 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 438.01948770699545,
            "unit": "iter/sec",
            "range": "stddev: 0.000009414461286788213",
            "extra": "mean: 2.283003446341936 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 323.5732861417765,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047898457666198",
            "extra": "mean: 3.0904899842746634 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 854.7326451476249,
            "unit": "iter/sec",
            "range": "stddev: 0.000003719799657868198",
            "extra": "mean: 1.1699564836759984 msec\nrounds: 827"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 437.60294697360604,
            "unit": "iter/sec",
            "range": "stddev: 0.00001200124963833974",
            "extra": "mean: 2.2851765668303754 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 305.9865581634907,
            "unit": "iter/sec",
            "range": "stddev: 0.000006103280431278676",
            "extra": "mean: 3.268117416666693 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1345.5233129297187,
            "unit": "iter/sec",
            "range": "stddev: 0.000010450217372187444",
            "extra": "mean: 743.2052573081158 usec\nrounds: 1026"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1163.323858442683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036178510958091624",
            "extra": "mean: 859.6058550184631 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 686.6374863886249,
            "unit": "iter/sec",
            "range": "stddev: 0.00002482896291401294",
            "extra": "mean: 1.4563725689657694 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 757.0847604742619,
            "unit": "iter/sec",
            "range": "stddev: 0.000019210925895019035",
            "extra": "mean: 1.3208560681812802 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1109.4165340147347,
            "unit": "iter/sec",
            "range": "stddev: 0.00006551303876577932",
            "extra": "mean: 901.374704035841 usec\nrounds: 892"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 981.5953344544688,
            "unit": "iter/sec",
            "range": "stddev: 0.000012408930630264464",
            "extra": "mean: 1.0187497483937815 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 614.8785215542745,
            "unit": "iter/sec",
            "range": "stddev: 0.00003367506871803305",
            "extra": "mean: 1.6263375039873325 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 634.0015836414238,
            "unit": "iter/sec",
            "range": "stddev: 0.000013419276541534436",
            "extra": "mean: 1.5772831264181448 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 808.8987578375459,
            "unit": "iter/sec",
            "range": "stddev: 0.00005825440850474398",
            "extra": "mean: 1.2362486532595638 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 723.4598985416492,
            "unit": "iter/sec",
            "range": "stddev: 0.000010954215774973695",
            "extra": "mean: 1.3822466207398647 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 496.51583949513235,
            "unit": "iter/sec",
            "range": "stddev: 0.00022463218372771517",
            "extra": "mean: 2.0140344384920748 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 568.0652824422374,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517675137091256",
            "extra": "mean: 1.7603610551603868 msec\nrounds: 562"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "152dc8b3f41aa6f3c61a8ece9633c6144cd83401",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/152dc8b3f41aa6f3c61a8ece9633c6144cd83401"
        },
        "date": 1609883042152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 646.6354801552816,
            "unit": "iter/sec",
            "range": "stddev: 0.00035138223730725573",
            "extra": "mean: 1.5464663333349142 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 361.4420129471412,
            "unit": "iter/sec",
            "range": "stddev: 0.0004006718957219381",
            "extra": "mean: 2.7666955256422945 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 777.558739244413,
            "unit": "iter/sec",
            "range": "stddev: 0.00026031488916218256",
            "extra": "mean: 1.286076471819663 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 622.7582851453617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003743083273757184",
            "extra": "mean: 1.6057594476909836 msec\nrounds: 650"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 320.04540539461925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005052529443817093",
            "extra": "mean: 3.1245566508508062 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 270.87445556158553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005594155418708337",
            "extra": "mean: 3.6917471524834937 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 629.8643245113597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524827990386933",
            "extra": "mean: 1.5876434989007937 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 316.3549253815831,
            "unit": "iter/sec",
            "range": "stddev: 0.0006436274388619516",
            "extra": "mean: 3.161006577640014 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 272.9081749127799,
            "unit": "iter/sec",
            "range": "stddev: 0.00038691201009218685",
            "extra": "mean: 3.664236149465274 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 625.1612860297679,
            "unit": "iter/sec",
            "range": "stddev: 0.00028697783191727893",
            "extra": "mean: 1.5995872142863043 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 320.1837114611614,
            "unit": "iter/sec",
            "range": "stddev: 0.0004755207348773112",
            "extra": "mean: 3.1232069721363724 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 239.52062342429755,
            "unit": "iter/sec",
            "range": "stddev: 0.0005328412630925677",
            "extra": "mean: 4.175005833333004 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 608.571404574902,
            "unit": "iter/sec",
            "range": "stddev: 0.00033167748150932417",
            "extra": "mean: 1.643192553055492 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 320.5838678577079,
            "unit": "iter/sec",
            "range": "stddev: 0.0003614573526651995",
            "extra": "mean: 3.119308549998071 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 223.4182240956361,
            "unit": "iter/sec",
            "range": "stddev: 0.0005814591988420611",
            "extra": "mean: 4.475910611356132 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 794.4707427963916,
            "unit": "iter/sec",
            "range": "stddev: 0.0002300177701928955",
            "extra": "mean: 1.2586995922344262 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 661.5830154022071,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441662548246132",
            "extra": "mean: 1.5115261074108037 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 426.22691841316595,
            "unit": "iter/sec",
            "range": "stddev: 0.000677818241675685",
            "extra": "mean: 2.346168101543139 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 478.7696593091399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005451349061570229",
            "extra": "mean: 2.0886870764596708 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 638.9240754968694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040103519023473",
            "extra": "mean: 1.5651311921879518 msec\nrounds: 640"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 546.2265862384488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005944824766792617",
            "extra": "mean: 1.8307420861485892 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 371.9443825537755,
            "unit": "iter/sec",
            "range": "stddev: 0.0004948714181821925",
            "extra": "mean: 2.6885740097322772 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 399.24847283951124,
            "unit": "iter/sec",
            "range": "stddev: 0.00047623888265134733",
            "extra": "mean: 2.5047058862563945 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 507.3755720828529,
            "unit": "iter/sec",
            "range": "stddev: 0.0003998091735237647",
            "extra": "mean: 1.9709265779092395 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 453.7729587840458,
            "unit": "iter/sec",
            "range": "stddev: 0.00022500052660843892",
            "extra": "mean: 2.2037452444933106 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 306.4243016591062,
            "unit": "iter/sec",
            "range": "stddev: 0.000921811902187883",
            "extra": "mean: 3.263448736231402 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 344.50203052436484,
            "unit": "iter/sec",
            "range": "stddev: 0.000701263947462705",
            "extra": "mean: 2.902740510637644 msec\nrounds: 376"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "6f691aeb989c364dfcacf795addf9f76371ed2ca",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/6f691aeb989c364dfcacf795addf9f76371ed2ca"
        },
        "date": 1609883584303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 866.0456702756617,
            "unit": "iter/sec",
            "range": "stddev: 0.00027189048691870143",
            "extra": "mean: 1.1546735170233005 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 374.59435406050244,
            "unit": "iter/sec",
            "range": "stddev: 0.0003232916290689035",
            "extra": "mean: 2.6695543837227333 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 900.8813450476738,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747191242417403",
            "extra": "mean: 1.1100240952897975 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 930.7715755644542,
            "unit": "iter/sec",
            "range": "stddev: 0.00018202949869206136",
            "extra": "mean: 1.0743774587159725 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 375.6273146782055,
            "unit": "iter/sec",
            "range": "stddev: 0.00030276913837500204",
            "extra": "mean: 2.662213212201263 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 331.5491943821812,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997509014245361",
            "extra": "mean: 3.0161436581483185 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 916.3300359346304,
            "unit": "iter/sec",
            "range": "stddev: 0.00028929000700831964",
            "extra": "mean: 1.0913098564754877 msec\nrounds: 857"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 368.9509701933192,
            "unit": "iter/sec",
            "range": "stddev: 0.00029158452906332153",
            "extra": "mean: 2.7103872351278278 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 343.48539113192834,
            "unit": "iter/sec",
            "range": "stddev: 0.000550080639457586",
            "extra": "mean: 2.9113319687471453 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 898.9038697817343,
            "unit": "iter/sec",
            "range": "stddev: 0.00016918638513938018",
            "extra": "mean: 1.1124660084540665 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 365.22933712003106,
            "unit": "iter/sec",
            "range": "stddev: 0.00032384803920288547",
            "extra": "mean: 2.7380056812669302 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 284.4032988710151,
            "unit": "iter/sec",
            "range": "stddev: 0.0003620684624648779",
            "extra": "mean: 3.5161336171896096 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 881.9949666993439,
            "unit": "iter/sec",
            "range": "stddev: 0.0001568093343367641",
            "extra": "mean: 1.1337933182796516 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 366.35216628573215,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024420273304778",
            "extra": "mean: 2.7296139944756366 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 266.9296322405648,
            "unit": "iter/sec",
            "range": "stddev: 0.0004373162088482168",
            "extra": "mean: 3.7463056896537092 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1176.7535199534786,
            "unit": "iter/sec",
            "range": "stddev: 0.00010862760785150116",
            "extra": "mean: 849.7956309827173 usec\nrounds: 794"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1045.7014716391805,
            "unit": "iter/sec",
            "range": "stddev: 0.00016358044495388608",
            "extra": "mean: 956.2958713565339 usec\nrounds: 995"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 511.91453400196025,
            "unit": "iter/sec",
            "range": "stddev: 0.00013458846645471393",
            "extra": "mean: 1.9534510813404076 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 746.6305797532981,
            "unit": "iter/sec",
            "range": "stddev: 0.00019473417613927716",
            "extra": "mean: 1.3393504460136365 msec\nrounds: 778"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1022.7343393964256,
            "unit": "iter/sec",
            "range": "stddev: 0.00022933985433288713",
            "extra": "mean: 977.771021739778 usec\nrounds: 874"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 965.7891380648689,
            "unit": "iter/sec",
            "range": "stddev: 0.00016777553611267305",
            "extra": "mean: 1.0354227031416803 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 464.5575416174478,
            "unit": "iter/sec",
            "range": "stddev: 0.0002453779427957657",
            "extra": "mean: 2.1525858702418326 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 593.4152052043437,
            "unit": "iter/sec",
            "range": "stddev: 0.0003915045599792305",
            "extra": "mean: 1.6851607293339377 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 724.3827744857329,
            "unit": "iter/sec",
            "range": "stddev: 0.0002443049995771886",
            "extra": "mean: 1.3804856150947797 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 690.3296464421708,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718445102775879",
            "extra": "mean: 1.448583303866221 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 398.39819537167915,
            "unit": "iter/sec",
            "range": "stddev: 0.00021631735785306136",
            "extra": "mean: 2.5100515303967836 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 541.0478813000256,
            "unit": "iter/sec",
            "range": "stddev: 0.00043006425472958657",
            "extra": "mean: 1.8482652544488445 msec\nrounds: 562"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "3eab3a49593d6436a93b46200e812bdc10ddc3eb",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/3eab3a49593d6436a93b46200e812bdc10ddc3eb"
        },
        "date": 1609886862349,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 694.1326360869535,
            "unit": "iter/sec",
            "range": "stddev: 0.000006807396372805472",
            "extra": "mean: 1.4406468562511598 msec\nrounds: 640"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 360.4888704337692,
            "unit": "iter/sec",
            "range": "stddev: 0.000013310089063965077",
            "extra": "mean: 2.7740107448996123 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 848.4508771508197,
            "unit": "iter/sec",
            "range": "stddev: 0.00000752456384427218",
            "extra": "mean: 1.1786186176836744 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 693.3632555518228,
            "unit": "iter/sec",
            "range": "stddev: 0.000004814898329615611",
            "extra": "mean: 1.4422454492546422 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 356.62897949646674,
            "unit": "iter/sec",
            "range": "stddev: 0.000010385847984030315",
            "extra": "mean: 2.804034605970397 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 295.9070102411776,
            "unit": "iter/sec",
            "range": "stddev: 0.000006973106724091737",
            "extra": "mean: 3.3794400449822217 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 694.3396986569003,
            "unit": "iter/sec",
            "range": "stddev: 0.000006416454450801905",
            "extra": "mean: 1.4402172336312549 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 354.390631894575,
            "unit": "iter/sec",
            "range": "stddev: 0.000008838814657904667",
            "extra": "mean: 2.8217450180722676 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 294.67168750914055,
            "unit": "iter/sec",
            "range": "stddev: 0.000007084561257983461",
            "extra": "mean: 3.393607334498265 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 694.8179885860526,
            "unit": "iter/sec",
            "range": "stddev: 0.00000397084602210311",
            "extra": "mean: 1.439225835293916 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 352.1272028214451,
            "unit": "iter/sec",
            "range": "stddev: 0.000008763829959654451",
            "extra": "mean: 2.8398828377569996 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 259.90856056632697,
            "unit": "iter/sec",
            "range": "stddev: 0.000006126007028967455",
            "extra": "mean: 3.8475069763806666 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 681.0291049324596,
            "unit": "iter/sec",
            "range": "stddev: 0.00003919324341851551",
            "extra": "mean: 1.468366025412635 msec\nrounds: 669"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 352.2024243715214,
            "unit": "iter/sec",
            "range": "stddev: 0.000009254642982399588",
            "extra": "mean: 2.839276310446825 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 242.41568953929476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059526876598576454",
            "extra": "mean: 4.125145537817606 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1049.8379982030842,
            "unit": "iter/sec",
            "range": "stddev: 0.0002704867029680254",
            "extra": "mean: 952.5279154608734 usec\nrounds: 828"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 930.667927963772,
            "unit": "iter/sec",
            "range": "stddev: 0.000004650933171557858",
            "extra": "mean: 1.0744971111102122 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 513.5260678931212,
            "unit": "iter/sec",
            "range": "stddev: 0.00048190167818994503",
            "extra": "mean: 1.9473208129487347 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 623.7658569564418,
            "unit": "iter/sec",
            "range": "stddev: 0.000008297745215160802",
            "extra": "mean: 1.603165657189587 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 878.4640833970345,
            "unit": "iter/sec",
            "range": "stddev: 0.0002686623908299126",
            "extra": "mean: 1.1383504674806786 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 786.0657144234098,
            "unit": "iter/sec",
            "range": "stddev: 0.000005401528598387446",
            "extra": "mean: 1.2721582708050232 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 491.7708828083279,
            "unit": "iter/sec",
            "range": "stddev: 0.00002518127227812361",
            "extra": "mean: 2.0334672811235937 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 514.9046210908764,
            "unit": "iter/sec",
            "range": "stddev: 0.000005185523221548289",
            "extra": "mean: 1.9421072545074485 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 629.1827681866787,
            "unit": "iter/sec",
            "range": "stddev: 0.0004995322886101247",
            "extra": "mean: 1.5893632988106563 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 576.7312660739018,
            "unit": "iter/sec",
            "range": "stddev: 0.000011864680268370914",
            "extra": "mean: 1.733909810035964 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 400.2190176335516,
            "unit": "iter/sec",
            "range": "stddev: 0.000023263616047498913",
            "extra": "mean: 2.498631888891446 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 460.0506504674237,
            "unit": "iter/sec",
            "range": "stddev: 0.000007189657551106079",
            "extra": "mean: 2.1736737008935285 msec\nrounds: 448"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "0b70becd4c516493622943f9f3425bf0e8a5d4a7",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/0b70becd4c516493622943f9f3425bf0e8a5d4a7"
        },
        "date": 1609890006297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 825.86113082586,
            "unit": "iter/sec",
            "range": "stddev: 0.00016457102643312058",
            "extra": "mean: 1.2108573253713992 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 367.39583321385095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005254143364248126",
            "extra": "mean: 2.721859938509231 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 794.4712193014392,
            "unit": "iter/sec",
            "range": "stddev: 0.0003192481676454959",
            "extra": "mean: 1.2586988372961803 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 825.2017310285455,
            "unit": "iter/sec",
            "range": "stddev: 0.00016166569754470333",
            "extra": "mean: 1.2118248937185128 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 357.532607300663,
            "unit": "iter/sec",
            "range": "stddev: 0.00033647166043507373",
            "extra": "mean: 2.796947689750326 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 311.2232748938217,
            "unit": "iter/sec",
            "range": "stddev: 0.0003105918572034453",
            "extra": "mean: 3.2131272969258626 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 818.0672683325985,
            "unit": "iter/sec",
            "range": "stddev: 0.00021225398366713663",
            "extra": "mean: 1.2223933638589655 msec\nrounds: 819"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 351.13457724351383,
            "unit": "iter/sec",
            "range": "stddev: 0.00045221272078743024",
            "extra": "mean: 2.847910928767617 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 298.4756322186084,
            "unit": "iter/sec",
            "range": "stddev: 0.0004326145597855498",
            "extra": "mean: 3.350357255521563 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 829.6537153989395,
            "unit": "iter/sec",
            "range": "stddev: 0.0002679004453539935",
            "extra": "mean: 1.2053221499998337 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 360.2359688686358,
            "unit": "iter/sec",
            "range": "stddev: 0.00019307020899435128",
            "extra": "mean: 2.7759582229964983 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 267.0318164364179,
            "unit": "iter/sec",
            "range": "stddev: 0.00019541321324644155",
            "extra": "mean: 3.7448721030518355 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 828.676349270713,
            "unit": "iter/sec",
            "range": "stddev: 0.000289468585278353",
            "extra": "mean: 1.2067437436582602 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 350.60052175999516,
            "unit": "iter/sec",
            "range": "stddev: 0.0003574824123100586",
            "extra": "mean: 2.8522490353980525 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 251.77229831106004,
            "unit": "iter/sec",
            "range": "stddev: 0.00027384939206743375",
            "extra": "mean: 3.9718428385815443 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1086.3439798869724,
            "unit": "iter/sec",
            "range": "stddev: 0.00014804542251180307",
            "extra": "mean: 920.518747758002 usec\nrounds: 892"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 978.2140054994035,
            "unit": "iter/sec",
            "range": "stddev: 0.00024983418359355447",
            "extra": "mean: 1.0222711946242014 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 518.5917836063799,
            "unit": "iter/sec",
            "range": "stddev: 0.0002568573488156121",
            "extra": "mean: 1.9282989657989207 msec\nrounds: 614"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 703.3973082849931,
            "unit": "iter/sec",
            "range": "stddev: 0.00023116243537603365",
            "extra": "mean: 1.421671633117529 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 955.2784942039646,
            "unit": "iter/sec",
            "range": "stddev: 0.00024708612624454155",
            "extra": "mean: 1.0468151497886509 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 920.1142529349172,
            "unit": "iter/sec",
            "range": "stddev: 0.00017255542219798877",
            "extra": "mean: 1.0868215515739146 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 466.44103697019807,
            "unit": "iter/sec",
            "range": "stddev: 0.00040520795999819247",
            "extra": "mean: 2.1438936987525223 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 608.2258990247583,
            "unit": "iter/sec",
            "range": "stddev: 0.0002857370140642136",
            "extra": "mean: 1.6441259762259715 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 681.817148397753,
            "unit": "iter/sec",
            "range": "stddev: 0.0005486713094523243",
            "extra": "mean: 1.4666688896722029 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 658.2084303392708,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455384492554356",
            "extra": "mean: 1.519275587954038 msec\nrounds: 631"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 389.6050286424306,
            "unit": "iter/sec",
            "range": "stddev: 0.00024059824659796318",
            "extra": "mean: 2.566701984018214 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 501.2947929149319,
            "unit": "iter/sec",
            "range": "stddev: 0.0004671708425345054",
            "extra": "mean: 1.9948342056082293 msec\nrounds: 428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "013b707f357b7a83f7bc1f8d038c3e282a500d0d",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/013b707f357b7a83f7bc1f8d038c3e282a500d0d"
        },
        "date": 1609904172239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 970.4041329149381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030000880561529802",
            "extra": "mean: 1.0304984965347999 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.799564530918,
            "unit": "iter/sec",
            "range": "stddev: 0.000008802727951889561",
            "extra": "mean: 2.2331419661998257 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1061.1979828113945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054295504641464354",
            "extra": "mean: 942.3312296078204 usec\nrounds: 993"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 965.2501722860757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031880106884717995",
            "extra": "mean: 1.0360008510867431 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 442.80566114603795,
            "unit": "iter/sec",
            "range": "stddev: 0.000009839395076015644",
            "extra": "mean: 2.258327044446251 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.04218998631234,
            "unit": "iter/sec",
            "range": "stddev: 0.000009224196425539928",
            "extra": "mean: 2.70239455678551 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 968.8609125285848,
            "unit": "iter/sec",
            "range": "stddev: 0.000002966233196663664",
            "extra": "mean: 1.0321398944562092 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 440.5829746406992,
            "unit": "iter/sec",
            "range": "stddev: 0.000008849320913393545",
            "extra": "mean: 2.2697200245095996 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.51201130896686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064796731331502304",
            "extra": "mean: 2.7136157555569675 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 969.6287963577292,
            "unit": "iter/sec",
            "range": "stddev: 0.000015271547984169458",
            "extra": "mean: 1.0313225058459028 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 436.17279621320176,
            "unit": "iter/sec",
            "range": "stddev: 0.00005956486076360732",
            "extra": "mean: 2.2926693472905146 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.81131669752875,
            "unit": "iter/sec",
            "range": "stddev: 0.000009544228763373008",
            "extra": "mean: 3.078710465409127 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 953.931605469469,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030364152020428617",
            "extra": "mean: 1.0482931839834144 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 437.8480969316993,
            "unit": "iter/sec",
            "range": "stddev: 0.000009030770108544182",
            "extra": "mean: 2.2838971026885426 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 303.0413792995722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000121521002598241",
            "extra": "mean: 3.2998793838363834 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1333.8598872084865,
            "unit": "iter/sec",
            "range": "stddev: 0.00007908087046739826",
            "extra": "mean: 749.7039303676854 usec\nrounds: 1034"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1156.057828966412,
            "unit": "iter/sec",
            "range": "stddev: 0.00008806653595396797",
            "extra": "mean: 865.0086310077261 usec\nrounds: 1103"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 680.7510663444904,
            "unit": "iter/sec",
            "range": "stddev: 0.000014456009541033282",
            "extra": "mean: 1.468965748918791 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 775.0993152473422,
            "unit": "iter/sec",
            "range": "stddev: 0.000010946977896752288",
            "extra": "mean: 1.2901572486628885 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1130.771310290335,
            "unit": "iter/sec",
            "range": "stddev: 0.000016562211893898425",
            "extra": "mean: 884.3521151445218 usec\nrounds: 964"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 992.3871464763313,
            "unit": "iter/sec",
            "range": "stddev: 0.000004410872086415933",
            "extra": "mean: 1.0076712536540802 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 615.3111852157975,
            "unit": "iter/sec",
            "range": "stddev: 0.000016119629063843584",
            "extra": "mean: 1.6251939246794078 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 641.9173778099306,
            "unit": "iter/sec",
            "range": "stddev: 0.000009852531165756497",
            "extra": "mean: 1.557832884057076 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 813.2700786041581,
            "unit": "iter/sec",
            "range": "stddev: 0.00003098423053743038",
            "extra": "mean: 1.2296038257258062 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 733.6317961325822,
            "unit": "iter/sec",
            "range": "stddev: 0.000003878880951412518",
            "extra": "mean: 1.363081596615095 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 500.1642990400538,
            "unit": "iter/sec",
            "range": "stddev: 0.00001462716297562371",
            "extra": "mean: 1.9993430197222428 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.8419886455616,
            "unit": "iter/sec",
            "range": "stddev: 0.000005120417617669816",
            "extra": "mean: 1.7335769928052969 msec\nrounds: 556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "ecb85c57b5b5114da3fe71138af608155ae517a8",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/ecb85c57b5b5114da3fe71138af608155ae517a8"
        },
        "date": 1609940735187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 900.6569316234837,
            "unit": "iter/sec",
            "range": "stddev: 0.00018714765760513666",
            "extra": "mean: 1.1103006759715321 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 372.6225467804707,
            "unit": "iter/sec",
            "range": "stddev: 0.00014642183338632977",
            "extra": "mean: 2.6836808685899154 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 802.0551886642504,
            "unit": "iter/sec",
            "range": "stddev: 0.00011308139819726827",
            "extra": "mean: 1.2467969961835277 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 894.4601390225475,
            "unit": "iter/sec",
            "range": "stddev: 0.00018335701546682063",
            "extra": "mean: 1.1179928052386827 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 357.01560295936247,
            "unit": "iter/sec",
            "range": "stddev: 0.0001727199638005064",
            "extra": "mean: 2.80099802840781 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 292.3533986094155,
            "unit": "iter/sec",
            "range": "stddev: 0.0005366820517004906",
            "extra": "mean: 3.4205177868857315 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 904.4551185596127,
            "unit": "iter/sec",
            "range": "stddev: 0.00007697177314013845",
            "extra": "mean: 1.1056380570796558 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 343.1141141556841,
            "unit": "iter/sec",
            "range": "stddev: 0.00038080224229509443",
            "extra": "mean: 2.9144822633156426 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 295.9595108152727,
            "unit": "iter/sec",
            "range": "stddev: 0.0002416787079789915",
            "extra": "mean: 3.378840562498983 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 895.0495651135665,
            "unit": "iter/sec",
            "range": "stddev: 0.0002195427549692329",
            "extra": "mean: 1.117256562068847 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 354.2892078558154,
            "unit": "iter/sec",
            "range": "stddev: 0.0001665900676976822",
            "extra": "mean: 2.822552812297259 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 268.24822038302875,
            "unit": "iter/sec",
            "range": "stddev: 0.00017532394886678141",
            "extra": "mean: 3.727890528302894 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 875.7397715509939,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836653289210228",
            "extra": "mean: 1.1418917268413344 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 355.5350608016587,
            "unit": "iter/sec",
            "range": "stddev: 0.00018353808678419",
            "extra": "mean: 2.8126621260508173 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 244.44621201016426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004308959130457573",
            "extra": "mean: 4.090879509961149 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1127.034139574655,
            "unit": "iter/sec",
            "range": "stddev: 0.0002864539146903387",
            "extra": "mean: 887.2845683072228 usec\nrounds: 915"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 989.265467318634,
            "unit": "iter/sec",
            "range": "stddev: 0.00012375605657970778",
            "extra": "mean: 1.0108510132375907 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 502.6666262893393,
            "unit": "iter/sec",
            "range": "stddev: 0.0002428396740538697",
            "extra": "mean: 1.9893900802246445 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 651.525381331246,
            "unit": "iter/sec",
            "range": "stddev: 0.0003001731889276416",
            "extra": "mean: 1.534859621211877 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 942.5963561573253,
            "unit": "iter/sec",
            "range": "stddev: 0.00017814647662263585",
            "extra": "mean: 1.0608994968712713 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 823.5599483826544,
            "unit": "iter/sec",
            "range": "stddev: 0.0001947693022280939",
            "extra": "mean: 1.214240690023655 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 460.39157506685825,
            "unit": "iter/sec",
            "range": "stddev: 0.00026933109767125486",
            "extra": "mean: 2.1720640736198953 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 544.394139057424,
            "unit": "iter/sec",
            "range": "stddev: 0.00012426877861038707",
            "extra": "mean: 1.8369044195285094 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 664.1543439946533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002497155189137252",
            "extra": "mean: 1.5056741088003036 msec\nrounds: 625"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 586.0077569815217,
            "unit": "iter/sec",
            "range": "stddev: 0.00022778175093738547",
            "extra": "mean: 1.7064620529102188 msec\nrounds: 567"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 370.81148696980307,
            "unit": "iter/sec",
            "range": "stddev: 0.00021464995252561787",
            "extra": "mean: 2.6967880854279866 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 474.9967310152019,
            "unit": "iter/sec",
            "range": "stddev: 0.00018214780906493933",
            "extra": "mean: 2.105277646569731 msec\nrounds: 481"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "469a044985c17141564d2e3dab8f1af214ccf90c",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/469a044985c17141564d2e3dab8f1af214ccf90c"
        },
        "date": 1609941061762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 964.5363366023882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037091495811405075",
            "extra": "mean: 1.0367675763492061 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.0924997764365,
            "unit": "iter/sec",
            "range": "stddev: 0.000012072131149352224",
            "extra": "mean: 2.2366736201122555 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1020.399973069447,
            "unit": "iter/sec",
            "range": "stddev: 0.000006661797875882648",
            "extra": "mean: 980.0078659272381 usec\nrounds: 992"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 959.4815837816692,
            "unit": "iter/sec",
            "range": "stddev: 0.000004042055798918979",
            "extra": "mean: 1.042229488197817 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 442.50262787228263,
            "unit": "iter/sec",
            "range": "stddev: 0.00000833742235116004",
            "extra": "mean: 2.25987358495106 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 361.03602995977207,
            "unit": "iter/sec",
            "range": "stddev: 0.000012529916388681977",
            "extra": "mean: 2.7698066592174295 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 964.5784186604466,
            "unit": "iter/sec",
            "range": "stddev: 0.000003494792763035012",
            "extra": "mean: 1.0367223448651743 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 439.85454915199625,
            "unit": "iter/sec",
            "range": "stddev: 0.000012557315895577004",
            "extra": "mean: 2.2734788168678 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 359.6558026292324,
            "unit": "iter/sec",
            "range": "stddev: 0.000006338286919691541",
            "extra": "mean: 2.7804361633806187 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 965.8889196869483,
            "unit": "iter/sec",
            "range": "stddev: 0.000003661878951950366",
            "extra": "mean: 1.0353157382984652 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 437.11971499901676,
            "unit": "iter/sec",
            "range": "stddev: 0.000009025345053199877",
            "extra": "mean: 2.287702809291613 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 320.6182005587221,
            "unit": "iter/sec",
            "range": "stddev: 0.000013654009555989795",
            "extra": "mean: 3.1189745256425248 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 948.0604710280368,
            "unit": "iter/sec",
            "range": "stddev: 0.000026821589018688878",
            "extra": "mean: 1.0547850380426074 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 435.19477755452067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008773707364429039",
            "extra": "mean: 2.297821691747487 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 296.03511661099054,
            "unit": "iter/sec",
            "range": "stddev: 0.000014469985358361174",
            "extra": "mean: 3.377977624573727 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1342.2263812251788,
            "unit": "iter/sec",
            "range": "stddev: 0.00001603039559435978",
            "extra": "mean: 745.0308040341184 usec\nrounds: 1041"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1140.4444326706875,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333187863209821",
            "extra": "mean: 876.8511392161429 usec\nrounds: 1099"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 662.9455924714489,
            "unit": "iter/sec",
            "range": "stddev: 0.00004251369297929686",
            "extra": "mean: 1.5084194108177391 msec\nrounds: 684"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 765.3506173532344,
            "unit": "iter/sec",
            "range": "stddev: 0.000019121356473212753",
            "extra": "mean: 1.3065907014725346 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1096.5406940349642,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352275078927944",
            "extra": "mean: 911.9588588365824 usec\nrounds: 928"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 976.9809968000033,
            "unit": "iter/sec",
            "range": "stddev: 0.000013518177523937943",
            "extra": "mean: 1.0235613622735682 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 596.6369289827982,
            "unit": "iter/sec",
            "range": "stddev: 0.000044811132027483254",
            "extra": "mean: 1.6760611880074077 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 636.350176809922,
            "unit": "iter/sec",
            "range": "stddev: 0.000013280823991483379",
            "extra": "mean: 1.5714618089887014 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 798.341868920524,
            "unit": "iter/sec",
            "range": "stddev: 0.00017253815025007385",
            "extra": "mean: 1.252596210884126 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 723.6918502308924,
            "unit": "iter/sec",
            "range": "stddev: 0.00001411632694301636",
            "extra": "mean: 1.3818035945560974 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 489.0448010756107,
            "unit": "iter/sec",
            "range": "stddev: 0.00004300179538748736",
            "extra": "mean: 2.0448024348701566 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.4850193479092,
            "unit": "iter/sec",
            "range": "stddev: 0.000006435642426659167",
            "extra": "mean: 1.7346504530701414 msec\nrounds: 554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "e6d1d68a1c662f20ea1827e9d11fc4dd1312a7d6",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/e6d1d68a1c662f20ea1827e9d11fc4dd1312a7d6"
        },
        "date": 1609941929774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 993.4509915943,
            "unit": "iter/sec",
            "range": "stddev: 0.0001294399240859123",
            "extra": "mean: 1.006592180652203 msec\nrounds: 1013"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 470.47792729152997,
            "unit": "iter/sec",
            "range": "stddev: 0.00023197093868826114",
            "extra": "mean: 2.1254982263606887 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1089.6451075629884,
            "unit": "iter/sec",
            "range": "stddev: 0.000120705756923782",
            "extra": "mean: 917.729995811681 usec\nrounds: 955"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 996.4561621056448,
            "unit": "iter/sec",
            "range": "stddev: 0.0001294562918202465",
            "extra": "mean: 1.003556441345966 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 476.53332710295143,
            "unit": "iter/sec",
            "range": "stddev: 0.00022859515588619537",
            "extra": "mean: 2.098489115293205 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 397.89539195519615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002611639670331387",
            "extra": "mean: 2.5132233753352993 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 1023.7008556403565,
            "unit": "iter/sec",
            "range": "stddev: 0.00013245634515457515",
            "extra": "mean: 976.847869658631 usec\nrounds: 936"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 472.4575637693334,
            "unit": "iter/sec",
            "range": "stddev: 0.00022709882326340313",
            "extra": "mean: 2.116592212053625 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 387.0925471294026,
            "unit": "iter/sec",
            "range": "stddev: 0.000277474127202116",
            "extra": "mean: 2.583361543423636 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 1021.3183416013842,
            "unit": "iter/sec",
            "range": "stddev: 0.0001327345310502472",
            "extra": "mean: 979.1266437377813 usec\nrounds: 974"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 462.68011460926147,
            "unit": "iter/sec",
            "range": "stddev: 0.000227657842740447",
            "extra": "mean: 2.1613204640197496 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 339.3470581632258,
            "unit": "iter/sec",
            "range": "stddev: 0.000302936578777705",
            "extra": "mean: 2.946835624309436 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 1010.5964536387079,
            "unit": "iter/sec",
            "range": "stddev: 0.0001247940207442674",
            "extra": "mean: 989.5146538457019 usec\nrounds: 780"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 467.3958785473466,
            "unit": "iter/sec",
            "range": "stddev: 0.00022052561472699037",
            "extra": "mean: 2.139513945026585 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 320.7347700200563,
            "unit": "iter/sec",
            "range": "stddev: 0.0003135533897393765",
            "extra": "mean: 3.117840949821148 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1357.3063795552653,
            "unit": "iter/sec",
            "range": "stddev: 0.00030350119248036674",
            "extra": "mean: 736.7533337076482 usec\nrounds: 890"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1225.0017261430235,
            "unit": "iter/sec",
            "range": "stddev: 0.00010720554657057897",
            "extra": "mean: 816.3253803311345 usec\nrounds: 1149"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 695.0511002872802,
            "unit": "iter/sec",
            "range": "stddev: 0.00017379894275054535",
            "extra": "mean: 1.4387431364207288 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 828.9413603936429,
            "unit": "iter/sec",
            "range": "stddev: 0.0001612722851869863",
            "extra": "mean: 1.2063579497651387 msec\nrounds: 637"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1165.3295399844576,
            "unit": "iter/sec",
            "range": "stddev: 0.00010487362956573126",
            "extra": "mean: 858.1263631344463 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 1050.110926137528,
            "unit": "iter/sec",
            "range": "stddev: 0.0001271888062206165",
            "extra": "mean: 952.2803497323432 usec\nrounds: 1118"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 610.042906548422,
            "unit": "iter/sec",
            "range": "stddev: 0.00020207580134705343",
            "extra": "mean: 1.6392289612183617 msec\nrounds: 722"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 602.426435511726,
            "unit": "iter/sec",
            "range": "stddev: 0.00019114453344836865",
            "extra": "mean: 1.6599537155944335 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 815.1313326160034,
            "unit": "iter/sec",
            "range": "stddev: 0.00015297208971523516",
            "extra": "mean: 1.226796173802689 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 766.5862902635619,
            "unit": "iter/sec",
            "range": "stddev: 0.00017024174715118856",
            "extra": "mean: 1.3044845866682375 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 506.77690247373357,
            "unit": "iter/sec",
            "range": "stddev: 0.00022909921496309945",
            "extra": "mean: 1.9732548881345877 msec\nrounds: 590"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 599.4260922685302,
            "unit": "iter/sec",
            "range": "stddev: 0.00020793166616096218",
            "extra": "mean: 1.6682623811310857 msec\nrounds: 530"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "fab441e5f2865e23b389d5ca1c94748fe1679409",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/fab441e5f2865e23b389d5ca1c94748fe1679409"
        },
        "date": 1609942895511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 1099.6554077986445,
            "unit": "iter/sec",
            "range": "stddev: 0.000005787041527612719",
            "extra": "mean: 909.3757852760978 usec\nrounds: 978"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 502.1418524293303,
            "unit": "iter/sec",
            "range": "stddev: 0.000016795186447728825",
            "extra": "mean: 1.991469133994834 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1118.2123601001435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000911938632909793",
            "extra": "mean: 894.2845166820041 usec\nrounds: 1109"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 966.9415677409877,
            "unit": "iter/sec",
            "range": "stddev: 0.000003933676467073289",
            "extra": "mean: 1.0341886556146769 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 448.88282175354686,
            "unit": "iter/sec",
            "range": "stddev: 0.000009320995563466898",
            "extra": "mean: 2.2277528823525277 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 373.51763353280893,
            "unit": "iter/sec",
            "range": "stddev: 0.000010380893877338765",
            "extra": "mean: 2.6772497741051424 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 970.0508651559929,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032861474849845916",
            "extra": "mean: 1.0308737777778187 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 446.6749869694844,
            "unit": "iter/sec",
            "range": "stddev: 0.00000878940118517959",
            "extra": "mean: 2.2387642674702026 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 371.1304416417621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494192411462693",
            "extra": "mean: 2.694470428177006 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 972.0814847355967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040837451104057355",
            "extra": "mean: 1.028720344644767 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 443.3907628292886,
            "unit": "iter/sec",
            "range": "stddev: 0.000008712833555156077",
            "extra": "mean: 2.255346939613655 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 327.99854126756486,
            "unit": "iter/sec",
            "range": "stddev: 0.000010830860633499244",
            "extra": "mean: 3.0487940468742813 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 955.1819756327416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031317532913379868",
            "extra": "mean: 1.0469209276458233 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 442.0615446945929,
            "unit": "iter/sec",
            "range": "stddev: 0.000017059154977869565",
            "extra": "mean: 2.262128457002226 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 304.1644705773645,
            "unit": "iter/sec",
            "range": "stddev: 0.00010805961764348093",
            "extra": "mean: 3.2876949700989124 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1374.9925625242827,
            "unit": "iter/sec",
            "range": "stddev: 0.00010831045991974867",
            "extra": "mean: 727.2766611654598 usec\nrounds: 1030"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1161.598597702424,
            "unit": "iter/sec",
            "range": "stddev: 0.000006235233873521503",
            "extra": "mean: 860.8825819675945 usec\nrounds: 1098"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 680.0046055037978,
            "unit": "iter/sec",
            "range": "stddev: 0.00018971450407778508",
            "extra": "mean: 1.4705782753620114 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 777.1300361381992,
            "unit": "iter/sec",
            "range": "stddev: 0.000008138932848929054",
            "extra": "mean: 1.2867859347829496 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1140.5855225724183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010351678480733303",
            "extra": "mean: 876.7426731356813 usec\nrounds: 979"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 982.0560135496273,
            "unit": "iter/sec",
            "range": "stddev: 0.000005594421803317517",
            "extra": "mean: 1.0182718563939286 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 614.629151664025,
            "unit": "iter/sec",
            "range": "stddev: 0.000014421015347675982",
            "extra": "mean: 1.6269973483890827 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 641.8137890765295,
            "unit": "iter/sec",
            "range": "stddev: 0.000008263019126519725",
            "extra": "mean: 1.5580843182550579 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 820.7118409264065,
            "unit": "iter/sec",
            "range": "stddev: 0.00011848426341073174",
            "extra": "mean: 1.2184544564036215 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 721.7207217125017,
            "unit": "iter/sec",
            "range": "stddev: 0.000004827814071742308",
            "extra": "mean: 1.3855775092991596 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 498.0687976487533,
            "unit": "iter/sec",
            "range": "stddev: 0.000014550019221005295",
            "extra": "mean: 2.007754761432009 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.7549090574291,
            "unit": "iter/sec",
            "range": "stddev: 0.000007286645669501976",
            "extra": "mean: 1.7338387316620605 msec\nrounds: 559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "7480f4f9d608b51839e58a443aff19a9b683ac68",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/7480f4f9d608b51839e58a443aff19a9b683ac68"
        },
        "date": 1609943761081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 866.2041286399207,
            "unit": "iter/sec",
            "range": "stddev: 0.000006864508725964626",
            "extra": "mean: 1.154462287740605 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 450.40663679036857,
            "unit": "iter/sec",
            "range": "stddev: 0.000016602202885210427",
            "extra": "mean: 2.220215952247229 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1061.8031167012718,
            "unit": "iter/sec",
            "range": "stddev: 0.000007595527669643267",
            "extra": "mean: 941.7941841296558 usec\nrounds: 983"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 865.2297660792091,
            "unit": "iter/sec",
            "range": "stddev: 0.000004791578472211116",
            "extra": "mean: 1.1557623641769776 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 446.33589018050804,
            "unit": "iter/sec",
            "range": "stddev: 0.00001548219598236629",
            "extra": "mean: 2.240465133994889 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.0346863405017,
            "unit": "iter/sec",
            "range": "stddev: 0.00000963869758759732",
            "extra": "mean: 2.7024493565444065 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 866.7418710046963,
            "unit": "iter/sec",
            "range": "stddev: 0.000004510937426416488",
            "extra": "mean: 1.1537460384149154 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 443.14126808947094,
            "unit": "iter/sec",
            "range": "stddev: 0.00001702850052745804",
            "extra": "mean: 2.2566167315252126 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.431521494368,
            "unit": "iter/sec",
            "range": "stddev: 0.000008767236017784517",
            "extra": "mean: 2.7142085887330527 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 866.923237414342,
            "unit": "iter/sec",
            "range": "stddev: 0.000004811460692971915",
            "extra": "mean: 1.1535046666675686 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 439.0180786269903,
            "unit": "iter/sec",
            "range": "stddev: 0.00007249449657194398",
            "extra": "mean: 2.2778105246313682 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.2455402529616,
            "unit": "iter/sec",
            "range": "stddev: 0.000050757442572237466",
            "extra": "mean: 3.084082511111319 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 846.1044507539027,
            "unit": "iter/sec",
            "range": "stddev: 0.0001897141308705606",
            "extra": "mean: 1.1818871761151617 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 440.6158629257532,
            "unit": "iter/sec",
            "range": "stddev: 0.000027022597606644468",
            "extra": "mean: 2.2695506089132946 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 303.12196239828177,
            "unit": "iter/sec",
            "range": "stddev: 0.000016438172300154112",
            "extra": "mean: 3.299002131313955 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1326.5442037903133,
            "unit": "iter/sec",
            "range": "stddev: 0.000023698212098951885",
            "extra": "mean: 753.8384300671746 usec\nrounds: 1051"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1162.1042893280905,
            "unit": "iter/sec",
            "range": "stddev: 0.000005401312452410903",
            "extra": "mean: 860.5079674718208 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 625.2152464843474,
            "unit": "iter/sec",
            "range": "stddev: 0.000026673570520976487",
            "extra": "mean: 1.5994491587067134 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 772.6551929166411,
            "unit": "iter/sec",
            "range": "stddev: 0.000013157042220510941",
            "extra": "mean: 1.2942383732971123 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1111.8097624284194,
            "unit": "iter/sec",
            "range": "stddev: 0.00002356648174207396",
            "extra": "mean: 899.4344480442372 usec\nrounds: 895"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 988.7728055892625,
            "unit": "iter/sec",
            "range": "stddev: 0.000005915666098841876",
            "extra": "mean: 1.0113546755607286 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 574.7375601800973,
            "unit": "iter/sec",
            "range": "stddev: 0.00002826953290613723",
            "extra": "mean: 1.739924566069154 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 641.0855346666259,
            "unit": "iter/sec",
            "range": "stddev: 0.000010603348311019197",
            "extra": "mean: 1.5598542564527136 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 815.475741452022,
            "unit": "iter/sec",
            "range": "stddev: 0.000010410586323839522",
            "extra": "mean: 1.22627804748602 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 725.5998539633907,
            "unit": "iter/sec",
            "range": "stddev: 0.00000559809140279361",
            "extra": "mean: 1.3781700678931694 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 479.47311242683384,
            "unit": "iter/sec",
            "range": "stddev: 0.00003903982542332592",
            "extra": "mean: 2.08562268473938 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.7644108512111,
            "unit": "iter/sec",
            "range": "stddev: 0.000006462175516524973",
            "extra": "mean: 1.7338101678710751 msec\nrounds: 554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "d8237913d5004ac5cb293db4d75f3ba10db9fe86",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/d8237913d5004ac5cb293db4d75f3ba10db9fe86"
        },
        "date": 1609944682436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 721.7024279906367,
            "unit": "iter/sec",
            "range": "stddev: 0.000006457331558599505",
            "extra": "mean: 1.385612630934607 msec\nrounds: 653"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 369.86598367122275,
            "unit": "iter/sec",
            "range": "stddev: 0.00027139525026901803",
            "extra": "mean: 2.7036819933376437 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 882.8248404057384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010682320475969415",
            "extra": "mean: 1.1327275289857146 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 719.9642085478605,
            "unit": "iter/sec",
            "range": "stddev: 0.000008660156256976046",
            "extra": "mean: 1.388957934474216 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 368.7276928910164,
            "unit": "iter/sec",
            "range": "stddev: 0.000015054824825300939",
            "extra": "mean: 2.7120284678362 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 307.6552726491936,
            "unit": "iter/sec",
            "range": "stddev: 0.00001289478964804915",
            "extra": "mean: 3.2503912297328257 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 721.7688931278187,
            "unit": "iter/sec",
            "range": "stddev: 0.00000544059672765066",
            "extra": "mean: 1.3854850347823304 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 366.4864047801723,
            "unit": "iter/sec",
            "range": "stddev: 0.00013574613269559408",
            "extra": "mean: 2.7286141776523065 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 306.5171501914199,
            "unit": "iter/sec",
            "range": "stddev: 0.000011642410185858181",
            "extra": "mean: 3.262460189831141 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 721.2082003165557,
            "unit": "iter/sec",
            "range": "stddev: 0.000007773585163867338",
            "extra": "mean: 1.3865621599436553 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 363.7264324781835,
            "unit": "iter/sec",
            "range": "stddev: 0.00004203363380475306",
            "extra": "mean: 2.7493190230544506 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 269.18560556057594,
            "unit": "iter/sec",
            "range": "stddev: 0.00007569194263705674",
            "extra": "mean: 3.7149088931316054 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 710.0448352449995,
            "unit": "iter/sec",
            "range": "stddev: 0.00000541216361393646",
            "extra": "mean: 1.4083617686690901 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 363.5776992600123,
            "unit": "iter/sec",
            "range": "stddev: 0.000015843702948219467",
            "extra": "mean: 2.7504437209303387 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 252.30972015857847,
            "unit": "iter/sec",
            "range": "stddev: 0.000011772424882354165",
            "extra": "mean: 3.963382779591261 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1090.7199920986543,
            "unit": "iter/sec",
            "range": "stddev: 0.00035961788257290285",
            "extra": "mean: 916.8255897426983 usec\nrounds: 858"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 961.9095305736456,
            "unit": "iter/sec",
            "range": "stddev: 0.00004667729748082351",
            "extra": "mean: 1.0395988065568273 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 534.9630006075706,
            "unit": "iter/sec",
            "range": "stddev: 0.00003546893839826506",
            "extra": "mean: 1.8692881542541735 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 649.6156110356832,
            "unit": "iter/sec",
            "range": "stddev: 0.000016372415179522867",
            "extra": "mean: 1.5393718731692707 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 915.1826830793134,
            "unit": "iter/sec",
            "range": "stddev: 0.00020056578509913662",
            "extra": "mean: 1.0926780177213384 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 824.4807357566157,
            "unit": "iter/sec",
            "range": "stddev: 0.000008568267331826663",
            "extra": "mean: 1.2128846152873571 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 483.013096104317,
            "unit": "iter/sec",
            "range": "stddev: 0.00003338543352662579",
            "extra": "mean: 2.0703372394359025 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 537.0606540834826,
            "unit": "iter/sec",
            "range": "stddev: 0.000010321089082916172",
            "extra": "mean: 1.8619870817134117 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 678.8724671623894,
            "unit": "iter/sec",
            "range": "stddev: 0.000026818101601346114",
            "extra": "mean: 1.473030721336936 msec\nrounds: 628"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 607.5423444933748,
            "unit": "iter/sec",
            "range": "stddev: 0.00000671465422670924",
            "extra": "mean: 1.64597580574222 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 398.62361898556406,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471937511523082",
            "extra": "mean: 2.5086320839313196 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 480.8044762931181,
            "unit": "iter/sec",
            "range": "stddev: 0.000013286308532057192",
            "extra": "mean: 2.0798475249435056 msec\nrounds: 461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "68842415606640837cd8a1c55e26af26763aa9c4",
          "message": "Adding a GPU op for Kepler solver",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/68842415606640837cd8a1c55e26af26763aa9c4"
        },
        "date": 1609945374559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 694.9288056425713,
            "unit": "iter/sec",
            "range": "stddev: 0.00000768831918329642",
            "extra": "mean: 1.4389963286603757 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 361.6184014589084,
            "unit": "iter/sec",
            "range": "stddev: 0.000008952872258593528",
            "extra": "mean: 2.765345999997825 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 829.8707378957945,
            "unit": "iter/sec",
            "range": "stddev: 0.000006713776089778564",
            "extra": "mean: 1.2050069418468499 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 693.0805339121741,
            "unit": "iter/sec",
            "range": "stddev: 0.000007018983635093159",
            "extra": "mean: 1.4428337704932832 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 357.7409036486429,
            "unit": "iter/sec",
            "range": "stddev: 0.000009796520103302742",
            "extra": "mean: 2.7953191536133515 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 290.6509082022292,
            "unit": "iter/sec",
            "range": "stddev: 0.00000904151519758099",
            "extra": "mean: 3.440553501743128 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 694.9127267884993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041721981329899105",
            "extra": "mean: 1.4390296240816378 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 355.7785418268838,
            "unit": "iter/sec",
            "range": "stddev: 0.000008878098186464725",
            "extra": "mean: 2.8107372492593554 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 289.4801872598706,
            "unit": "iter/sec",
            "range": "stddev: 0.000006873014604438458",
            "extra": "mean: 3.4544678496503987 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 694.896426596793,
            "unit": "iter/sec",
            "range": "stddev: 0.000004314296897971223",
            "extra": "mean: 1.4390633794124261 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 352.68624479922704,
            "unit": "iter/sec",
            "range": "stddev: 0.00004250606268643397",
            "extra": "mean: 2.8353813474332346 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 255.23477159610678,
            "unit": "iter/sec",
            "range": "stddev: 0.000005680301708151096",
            "extra": "mean: 3.9179614664041083 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 683.6216666270446,
            "unit": "iter/sec",
            "range": "stddev: 0.000003788558573581551",
            "extra": "mean: 1.462797405082186 msec\nrounds: 669"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 353.53818333315314,
            "unit": "iter/sec",
            "range": "stddev: 0.000008439929358748631",
            "extra": "mean: 2.828548788060214 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 238.3669781266825,
            "unit": "iter/sec",
            "range": "stddev: 0.000006020662058768338",
            "extra": "mean: 4.195211970462369 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1044.6005637689661,
            "unit": "iter/sec",
            "range": "stddev: 0.000283729430786791",
            "extra": "mean: 957.3037146294031 usec\nrounds: 834"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 921.8585396944699,
            "unit": "iter/sec",
            "range": "stddev: 0.00006999649855611525",
            "extra": "mean: 1.0847651314608728 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 538.2541966037396,
            "unit": "iter/sec",
            "range": "stddev: 0.00002629205171606215",
            "extra": "mean: 1.8578582504507541 msec\nrounds: 555"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 622.369383313593,
            "unit": "iter/sec",
            "range": "stddev: 0.00002218970952873304",
            "extra": "mean: 1.6067628434352637 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 892.1477754162693,
            "unit": "iter/sec",
            "range": "stddev: 0.000029420777297290175",
            "extra": "mean: 1.1208905380427672 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 790.5247547518193,
            "unit": "iter/sec",
            "range": "stddev: 0.000004893007442364941",
            "extra": "mean: 1.264982524568689 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 487.58312154524606,
            "unit": "iter/sec",
            "range": "stddev: 0.00002703128516620088",
            "extra": "mean: 2.050932355555715 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 514.8336212848322,
            "unit": "iter/sec",
            "range": "stddev: 0.000007827450984100373",
            "extra": "mean: 1.9423750871288747 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 651.0615078706492,
            "unit": "iter/sec",
            "range": "stddev: 0.00005699237405874872",
            "extra": "mean: 1.5359531901533898 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 579.5448297343377,
            "unit": "iter/sec",
            "range": "stddev: 0.000005761423707566581",
            "extra": "mean: 1.7254920563408325 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 395.2828005973551,
            "unit": "iter/sec",
            "range": "stddev: 0.000028198121058851162",
            "extra": "mean: 2.52983433250521 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 461.2440637617412,
            "unit": "iter/sec",
            "range": "stddev: 0.00001256142597563732",
            "extra": "mean: 2.1680495827834805 msec\nrounds: 453"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "eb8833200a653f6f0253a41457ceab2acdd1c824",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/eb8833200a653f6f0253a41457ceab2acdd1c824"
        },
        "date": 1609953554845,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 694.4043105831108,
            "unit": "iter/sec",
            "range": "stddev: 0.000005244218144787041",
            "extra": "mean: 1.4400832263847438 msec\nrounds: 614"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 361.88286393367076,
            "unit": "iter/sec",
            "range": "stddev: 0.000010324792262237112",
            "extra": "mean: 2.7633250967729968 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 848.9259093194789,
            "unit": "iter/sec",
            "range": "stddev: 0.00001082522120139912",
            "extra": "mean: 1.177959099872009 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 693.0236103739047,
            "unit": "iter/sec",
            "range": "stddev: 0.000005629121433714241",
            "extra": "mean: 1.4429522819005738 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 357.7310479009743,
            "unit": "iter/sec",
            "range": "stddev: 0.000011319600054484848",
            "extra": "mean: 2.7953961666665736 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 296.18461336706656,
            "unit": "iter/sec",
            "range": "stddev: 0.000007869348012419167",
            "extra": "mean: 3.3762726180535356 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 694.337153528679,
            "unit": "iter/sec",
            "range": "stddev: 0.000005223474139664195",
            "extra": "mean: 1.4402225128209216 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 355.63091846949465,
            "unit": "iter/sec",
            "range": "stddev: 0.000013969575418885435",
            "extra": "mean: 2.811903993903663 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 294.895218485593,
            "unit": "iter/sec",
            "range": "stddev: 0.000007805890595863272",
            "extra": "mean: 3.3910349755259075 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 694.5827655748916,
            "unit": "iter/sec",
            "range": "stddev: 0.000005413462534505158",
            "extra": "mean: 1.4397132344225687 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 353.4067937710592,
            "unit": "iter/sec",
            "range": "stddev: 0.00001188338198816571",
            "extra": "mean: 2.8296003858030274 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 259.9814377979662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058415369766452004",
            "extra": "mean: 3.8464284545464693 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 683.2087420227946,
            "unit": "iter/sec",
            "range": "stddev: 0.000005139617329721873",
            "extra": "mean: 1.4636815053614112 msec\nrounds: 653"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 353.130489269213,
            "unit": "iter/sec",
            "range": "stddev: 0.00002733284059283259",
            "extra": "mean: 2.831814386997433 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 242.6558641326472,
            "unit": "iter/sec",
            "range": "stddev: 0.000007225458917196163",
            "extra": "mean: 4.121062573840592 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1047.7706105375844,
            "unit": "iter/sec",
            "range": "stddev: 0.00016242775228071343",
            "extra": "mean: 954.4073769037342 usec\nrounds: 788"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 929.2698223961148,
            "unit": "iter/sec",
            "range": "stddev: 0.000006365737791341201",
            "extra": "mean: 1.0761137141218122 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 539.3063040355187,
            "unit": "iter/sec",
            "range": "stddev: 0.00003655500393712328",
            "extra": "mean: 1.8542338417281696 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 611.4195599428114,
            "unit": "iter/sec",
            "range": "stddev: 0.000010362949493519165",
            "extra": "mean: 1.6355381239251392 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 890.7499292766835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000733376783663074",
            "extra": "mean: 1.1226495418439506 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 789.6115545435204,
            "unit": "iter/sec",
            "range": "stddev: 0.00007904420634349813",
            "extra": "mean: 1.2664455000004486 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 486.33030715695685,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034484598931081",
            "extra": "mean: 2.056215673347421 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 506.93161634426974,
            "unit": "iter/sec",
            "range": "stddev: 0.000007354421115218979",
            "extra": "mean: 1.9726526571995766 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 647.8824026828752,
            "unit": "iter/sec",
            "range": "stddev: 0.0002380795558662784",
            "extra": "mean: 1.5434899850019217 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 582.6177207845168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062939618552121144",
            "extra": "mean: 1.7163913220034954 msec\nrounds: 559"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 395.9950879361176,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870036433310191",
            "extra": "mean: 2.5252838493828014 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 459.5059744262014,
            "unit": "iter/sec",
            "range": "stddev: 0.000006207142541185905",
            "extra": "mean: 2.1762502680160565 msec\nrounds: 444"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "f50d1120a25eb39d56a105473f10d1d91ba9d1d5",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/f50d1120a25eb39d56a105473f10d1d91ba9d1d5"
        },
        "date": 1609953980624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 868.3347591959648,
            "unit": "iter/sec",
            "range": "stddev: 0.000004009674719612171",
            "extra": "mean: 1.1516295868726374 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 446.57825466408775,
            "unit": "iter/sec",
            "range": "stddev: 0.000011970952604051876",
            "extra": "mean: 2.2392492011331613 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1062.460225808493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008038936322761846",
            "extra": "mean: 941.2117044090161 usec\nrounds: 998"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 866.6943250404618,
            "unit": "iter/sec",
            "range": "stddev: 0.000005588991262133558",
            "extra": "mean: 1.153809331742555 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 441.73482904860066,
            "unit": "iter/sec",
            "range": "stddev: 0.000013705716188575062",
            "extra": "mean: 2.2638015710777872 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 369.90393452788174,
            "unit": "iter/sec",
            "range": "stddev: 0.000013559869914025578",
            "extra": "mean: 2.7034046049721714 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 868.0059801464075,
            "unit": "iter/sec",
            "range": "stddev: 0.000006067223027371663",
            "extra": "mean: 1.1520657954814193 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 439.30842544130263,
            "unit": "iter/sec",
            "range": "stddev: 0.000011852398424070889",
            "extra": "mean: 2.2763050788189654 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.378682170289,
            "unit": "iter/sec",
            "range": "stddev: 0.000013082737790932766",
            "extra": "mean: 2.7145979080780087 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 868.4364950123821,
            "unit": "iter/sec",
            "range": "stddev: 0.000005674321862277019",
            "extra": "mean: 1.1514946754808386 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 435.71741504875195,
            "unit": "iter/sec",
            "range": "stddev: 0.000009744648314600713",
            "extra": "mean: 2.295065483871263 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 323.6391358213873,
            "unit": "iter/sec",
            "range": "stddev: 0.00007508327148677963",
            "extra": "mean: 3.0898611735012436 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 854.1149318399083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037710855610582088",
            "extra": "mean: 1.1708026200242518 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 436.29522433228334,
            "unit": "iter/sec",
            "range": "stddev: 0.000009580375026783469",
            "extra": "mean: 2.2920260049383394 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 302.78645566806466,
            "unit": "iter/sec",
            "range": "stddev: 0.000013727109083383064",
            "extra": "mean: 3.3026576363649136 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1288.1220346991117,
            "unit": "iter/sec",
            "range": "stddev: 0.00005713205195138602",
            "extra": "mean: 776.3239608222266 usec\nrounds: 1021"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1159.4445699848854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000138212419905478",
            "extra": "mean: 862.4819382379237 usec\nrounds: 1101"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 686.1656691877204,
            "unit": "iter/sec",
            "range": "stddev: 0.00000972771814538683",
            "extra": "mean: 1.457373991304163 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 765.4953565351648,
            "unit": "iter/sec",
            "range": "stddev: 0.000019119041579513627",
            "extra": "mean: 1.3063436524635048 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1090.5791949644774,
            "unit": "iter/sec",
            "range": "stddev: 0.000011851735661741328",
            "extra": "mean: 916.9439547511012 usec\nrounds: 884"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 974.7751906702473,
            "unit": "iter/sec",
            "range": "stddev: 0.000010918924654267717",
            "extra": "mean: 1.0258775659979695 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 617.6011929406145,
            "unit": "iter/sec",
            "range": "stddev: 0.000008917884832995857",
            "extra": "mean: 1.619167856912082 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 637.2870341010099,
            "unit": "iter/sec",
            "range": "stddev: 0.000014431234895741004",
            "extra": "mean: 1.5691516483002856 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 800.3271549364345,
            "unit": "iter/sec",
            "range": "stddev: 0.00006713484876938584",
            "extra": "mean: 1.249489029370026 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 722.6627518345326,
            "unit": "iter/sec",
            "range": "stddev: 0.000011629745310203436",
            "extra": "mean: 1.3837713338087874 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 502.5957815623902,
            "unit": "iter/sec",
            "range": "stddev: 0.000006775096784664168",
            "extra": "mean: 1.9896705000017278 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 577.3858440891178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032767001664900423",
            "extra": "mean: 1.7319440894461087 msec\nrounds: 559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "853c14ac618fd5853abb0e3fb37d39a8c74542e8",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/853c14ac618fd5853abb0e3fb37d39a8c74542e8"
        },
        "date": 1609954080845,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 723.1184655458637,
            "unit": "iter/sec",
            "range": "stddev: 0.000010979964919521898",
            "extra": "mean: 1.3828992725903155 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 372.9299213347301,
            "unit": "iter/sec",
            "range": "stddev: 0.00001736831679987476",
            "extra": "mean: 2.6814689377054073 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 884.1733381772581,
            "unit": "iter/sec",
            "range": "stddev: 0.000007762506180917576",
            "extra": "mean: 1.1309999485638427 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 721.4480403715627,
            "unit": "iter/sec",
            "range": "stddev: 0.000008103170202439258",
            "extra": "mean: 1.3861012076281702 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 369.3736264386848,
            "unit": "iter/sec",
            "range": "stddev: 0.00001650694321465002",
            "extra": "mean: 2.7072858710609586 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 304.3708036262207,
            "unit": "iter/sec",
            "range": "stddev: 0.00001567014061813757",
            "extra": "mean: 3.2854662408029096 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 722.9851699538356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059981530208786746",
            "extra": "mean: 1.3831542354649577 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 367.5960282315016,
            "unit": "iter/sec",
            "range": "stddev: 0.00003113766727947459",
            "extra": "mean: 2.720377597143754 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 303.652206772857,
            "unit": "iter/sec",
            "range": "stddev: 0.00002905245349099275",
            "extra": "mean: 3.293241338924425 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 722.9885214499099,
            "unit": "iter/sec",
            "range": "stddev: 0.00000969327425498628",
            "extra": "mean: 1.3831478236951265 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 364.64433947063696,
            "unit": "iter/sec",
            "range": "stddev: 0.000013715871839895552",
            "extra": "mean: 2.7423982542872443 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 267.18281799127124,
            "unit": "iter/sec",
            "range": "stddev: 0.000012227977342601787",
            "extra": "mean: 3.742755643937664 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 711.2111481965159,
            "unit": "iter/sec",
            "range": "stddev: 0.000007521574996543447",
            "extra": "mean: 1.4060522005817722 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 365.1524424222356,
            "unit": "iter/sec",
            "range": "stddev: 0.000011760720018201397",
            "extra": "mean: 2.7385822572252523 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 249.28551868743293,
            "unit": "iter/sec",
            "range": "stddev: 0.000017434063049836483",
            "extra": "mean: 4.011464465586754 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1078.6992646061865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000860536086085573",
            "extra": "mean: 927.0424415882788 usec\nrounds: 856"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 968.2464951194696,
            "unit": "iter/sec",
            "range": "stddev: 0.00000702601327543848",
            "extra": "mean: 1.0327948565169993 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 557.664284708631,
            "unit": "iter/sec",
            "range": "stddev: 0.000051896075251009206",
            "extra": "mean: 1.7931935528603573 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 648.8923569694462,
            "unit": "iter/sec",
            "range": "stddev: 0.00001404119696302863",
            "extra": "mean: 1.541087653845006 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 927.6705066571412,
            "unit": "iter/sec",
            "range": "stddev: 0.000032357097702601315",
            "extra": "mean: 1.0779689478363368 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 822.9747644395629,
            "unit": "iter/sec",
            "range": "stddev: 0.00001476082102589889",
            "extra": "mean: 1.2151040872814485 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 504.20406649600085,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792200587582361",
            "extra": "mean: 1.9833239484750003 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 536.9866304564188,
            "unit": "iter/sec",
            "range": "stddev: 0.000014746326351645512",
            "extra": "mean: 1.8622437567021677 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 679.3314224485547,
            "unit": "iter/sec",
            "range": "stddev: 0.00002733042990454441",
            "extra": "mean: 1.4720355439994819 msec\nrounds: 625"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 602.6138027899337,
            "unit": "iter/sec",
            "range": "stddev: 0.000015168255662010942",
            "extra": "mean: 1.659437595638001 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 409.37015378993715,
            "unit": "iter/sec",
            "range": "stddev: 0.00003890380077104901",
            "extra": "mean: 2.4427770093692196 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 479.78207099410076,
            "unit": "iter/sec",
            "range": "stddev: 0.000015704916047165047",
            "extra": "mean: 2.0842796353936612 msec\nrounds: 469"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "f44b7e8d245313212dfc0f5f8cb5cf2aac6e4878",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/f44b7e8d245313212dfc0f5f8cb5cf2aac6e4878"
        },
        "date": 1609955130530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 693.8462741123236,
            "unit": "iter/sec",
            "range": "stddev: 0.000004343335821849884",
            "extra": "mean: 1.441241435329974 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 361.8567749884995,
            "unit": "iter/sec",
            "range": "stddev: 0.000009903660281253684",
            "extra": "mean: 2.763524325423455 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 850.500308418599,
            "unit": "iter/sec",
            "range": "stddev: 0.000007145663252700883",
            "extra": "mean: 1.1757785271816978 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 692.1636111633962,
            "unit": "iter/sec",
            "range": "stddev: 0.000006243056039573941",
            "extra": "mean: 1.4447451207658677 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 357.54898503581643,
            "unit": "iter/sec",
            "range": "stddev: 0.000012524270625377258",
            "extra": "mean: 2.796819573966426 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 296.10467850772955,
            "unit": "iter/sec",
            "range": "stddev: 0.000008131517383160298",
            "extra": "mean: 3.3771840588256556 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 693.5908251836514,
            "unit": "iter/sec",
            "range": "stddev: 0.000004788536732852443",
            "extra": "mean: 1.4417722433615185 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 355.81158659653306,
            "unit": "iter/sec",
            "range": "stddev: 0.000009959559319939602",
            "extra": "mean: 2.8104762117652293 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 294.8555912287698,
            "unit": "iter/sec",
            "range": "stddev: 0.000009747698086403706",
            "extra": "mean: 3.391490715277396 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 693.8671350767037,
            "unit": "iter/sec",
            "range": "stddev: 0.000004588730181847721",
            "extra": "mean: 1.4411981047199403 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 353.32168610325726,
            "unit": "iter/sec",
            "range": "stddev: 0.000011444070846646366",
            "extra": "mean: 2.830281976260446 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 260.06756420690186,
            "unit": "iter/sec",
            "range": "stddev: 0.000023419207714506606",
            "extra": "mean: 3.8451546352948127 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 682.4724479902626,
            "unit": "iter/sec",
            "range": "stddev: 0.000004895556900253182",
            "extra": "mean: 1.4652606166663418 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 353.60559843610497,
            "unit": "iter/sec",
            "range": "stddev: 0.000009617465645628902",
            "extra": "mean: 2.828009523669054 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 242.64265294170784,
            "unit": "iter/sec",
            "range": "stddev: 0.000007447130938809841",
            "extra": "mean: 4.121286953783178 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1063.427852806957,
            "unit": "iter/sec",
            "range": "stddev: 0.000042362256097750874",
            "extra": "mean: 940.3552834923998 usec\nrounds: 836"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 930.2946325128985,
            "unit": "iter/sec",
            "range": "stddev: 0.000005898201866141756",
            "extra": "mean: 1.0749282700888152 msec\nrounds: 896"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 540.2070498896946,
            "unit": "iter/sec",
            "range": "stddev: 0.000027324070693864433",
            "extra": "mean: 1.8511420763653323 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 624.0830985089146,
            "unit": "iter/sec",
            "range": "stddev: 0.000009214973218915396",
            "extra": "mean: 1.6023507164178004 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 887.408927029966,
            "unit": "iter/sec",
            "range": "stddev: 0.00009106128293108638",
            "extra": "mean: 1.1268762005210615 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 792.5689443938952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050110172837861525",
            "extra": "mean: 1.2617198883117158 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 483.61272315872225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003062547195964626",
            "extra": "mean: 2.0677702469622554 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 515.0658316400513,
            "unit": "iter/sec",
            "range": "stddev: 0.000006726904045350728",
            "extra": "mean: 1.9414993940014256 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 648.1657080477883,
            "unit": "iter/sec",
            "range": "stddev: 0.0001769135082796445",
            "extra": "mean: 1.542815344261118 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 582.6663620268449,
            "unit": "iter/sec",
            "range": "stddev: 0.000005571754209376811",
            "extra": "mean: 1.7162480369064579 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 392.67862799991235,
            "unit": "iter/sec",
            "range": "stddev: 0.000029671095250023663",
            "extra": "mean: 2.5466117295291744 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 461.14882186255556,
            "unit": "iter/sec",
            "range": "stddev: 0.000008373639473354798",
            "extra": "mean: 2.168497353980117 msec\nrounds: 452"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "4fe0c7a68fc3b36a4a133d5554fdfb255a14e375",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/4fe0c7a68fc3b36a4a133d5554fdfb255a14e375"
        },
        "date": 1609955856489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 733.850579549218,
            "unit": "iter/sec",
            "range": "stddev: 0.000039502901703318284",
            "extra": "mean: 1.3626752200894487 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 378.6950557567752,
            "unit": "iter/sec",
            "range": "stddev: 0.00004432777833047654",
            "extra": "mean: 2.6406470979707506 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 866.6859693065616,
            "unit": "iter/sec",
            "range": "stddev: 0.00002212272772096597",
            "extra": "mean: 1.1538204556375864 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 722.7966507564977,
            "unit": "iter/sec",
            "range": "stddev: 0.000054095526683156224",
            "extra": "mean: 1.3835149885564277 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 378.3241115373844,
            "unit": "iter/sec",
            "range": "stddev: 0.00006289215851752305",
            "extra": "mean: 2.6432362344983242 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 313.67475494448723,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104052392920789",
            "extra": "mean: 3.1880155614594345 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 734.0014759708264,
            "unit": "iter/sec",
            "range": "stddev: 0.00004161071494172004",
            "extra": "mean: 1.3623950805784837 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 374.42290119136914,
            "unit": "iter/sec",
            "range": "stddev: 0.00005936459176130618",
            "extra": "mean: 2.670776805633734 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 308.045684597329,
            "unit": "iter/sec",
            "range": "stddev: 0.0000692400173147378",
            "extra": "mean: 3.2462717382559 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 733.775084771722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000390817427812066",
            "extra": "mean: 1.3628154195384008 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 373.22968843943295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000637757444229411",
            "extra": "mean: 2.679315260748016 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 272.1798847913082,
            "unit": "iter/sec",
            "range": "stddev: 0.00007162796655875436",
            "extra": "mean: 3.674040793891665 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 725.1608557843679,
            "unit": "iter/sec",
            "range": "stddev: 0.00004300289945921388",
            "extra": "mean: 1.3790043850593028 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 370.8722176147107,
            "unit": "iter/sec",
            "range": "stddev: 0.00010107830476312291",
            "extra": "mean: 2.6963464840574107 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 256.67620501713355,
            "unit": "iter/sec",
            "range": "stddev: 0.00010244374405078669",
            "extra": "mean: 3.8959591128957527 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1119.5593961580387,
            "unit": "iter/sec",
            "range": "stddev: 0.00002802822984200351",
            "extra": "mean: 893.2085277759024 usec\nrounds: 864"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 987.37589752755,
            "unit": "iter/sec",
            "range": "stddev: 0.00003579488829519891",
            "extra": "mean: 1.0127855080360597 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 566.5753796091993,
            "unit": "iter/sec",
            "range": "stddev: 0.000061168211069493",
            "extra": "mean: 1.7649902131112005 msec\nrounds: 732"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 656.5637985110427,
            "unit": "iter/sec",
            "range": "stddev: 0.00003878787694976224",
            "extra": "mean: 1.523081233336049 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 931.3689473134903,
            "unit": "iter/sec",
            "range": "stddev: 0.00002886830182125891",
            "extra": "mean: 1.0736883625812028 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 836.473945350066,
            "unit": "iter/sec",
            "range": "stddev: 0.000034909494093061",
            "extra": "mean: 1.1954944987336074 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 512.6200680164692,
            "unit": "iter/sec",
            "range": "stddev: 0.00006204309040440017",
            "extra": "mean: 1.9507624893996005 msec\nrounds: 566"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 545.7284803194686,
            "unit": "iter/sec",
            "range": "stddev: 0.00005156419618229983",
            "extra": "mean: 1.8324130699841825 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 682.5139112102165,
            "unit": "iter/sec",
            "range": "stddev: 0.000027209292616213235",
            "extra": "mean: 1.4651716010107767 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 612.5583382529288,
            "unit": "iter/sec",
            "range": "stddev: 0.00003880519705520091",
            "extra": "mean: 1.6324975721530288 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 418.58215242082264,
            "unit": "iter/sec",
            "range": "stddev: 0.00007626021287527525",
            "extra": "mean: 2.3890172913885905 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 491.3330730551085,
            "unit": "iter/sec",
            "range": "stddev: 0.00006413438343958223",
            "extra": "mean: 2.0352792328470812 msec\nrounds: 481"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "3c06cc88f0c0c261ec713dba5d5f2f1b157ba7c2",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/3c06cc88f0c0c261ec713dba5d5f2f1b157ba7c2"
        },
        "date": 1609960813696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 869.3101192224797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031852742946189824",
            "extra": "mean: 1.1503374663283694 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 448.5261081015397,
            "unit": "iter/sec",
            "range": "stddev: 0.000008336700482728997",
            "extra": "mean: 2.2295246183832287 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1062.8220752521208,
            "unit": "iter/sec",
            "range": "stddev: 0.000006766991789380882",
            "extra": "mean: 940.8912585512319 usec\nrounds: 994"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 867.8970629735762,
            "unit": "iter/sec",
            "range": "stddev: 0.000003059755191469925",
            "extra": "mean: 1.1522103745504273 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 443.57189262807304,
            "unit": "iter/sec",
            "range": "stddev: 0.000009138571659162566",
            "extra": "mean: 2.254425982843962 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.2597678353145,
            "unit": "iter/sec",
            "range": "stddev: 0.000010431491821146379",
            "extra": "mean: 2.7008065333330618 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 869.4455504694884,
            "unit": "iter/sec",
            "range": "stddev: 0.000003065373956292029",
            "extra": "mean: 1.1501582812862912 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 441.19184663071195,
            "unit": "iter/sec",
            "range": "stddev: 0.000008566406878861013",
            "extra": "mean: 2.266587670730515 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.5554751498432,
            "unit": "iter/sec",
            "range": "stddev: 0.000006582573252162665",
            "extra": "mean: 2.7132957381610763 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 869.8762305617671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029945909684060464",
            "extra": "mean: 1.149588832142475 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 438.2986848964309,
            "unit": "iter/sec",
            "range": "stddev: 0.000009033895005174488",
            "extra": "mean: 2.281549168317258 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.92069314269065,
            "unit": "iter/sec",
            "range": "stddev: 0.000009053344419808742",
            "extra": "mean: 3.077674094339214 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 854.9079021452739,
            "unit": "iter/sec",
            "range": "stddev: 0.00000991048983086785",
            "extra": "mean: 1.1697166413956843 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 438.32923693045166,
            "unit": "iter/sec",
            "range": "stddev: 0.000008802848793226407",
            "extra": "mean: 2.2813901418094704 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 301.943748288976,
            "unit": "iter/sec",
            "range": "stddev: 0.000022567535673873788",
            "extra": "mean: 3.311875161074531 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1283.617748865553,
            "unit": "iter/sec",
            "range": "stddev: 0.00012145080629482001",
            "extra": "mean: 779.0481246335124 usec\nrounds: 1027"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1162.1550825492618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033581869790751426",
            "extra": "mean: 860.4703580579245 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 684.465035162208,
            "unit": "iter/sec",
            "range": "stddev: 0.00001045170023767585",
            "extra": "mean: 1.460995008697581 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 774.9817404140266,
            "unit": "iter/sec",
            "range": "stddev: 0.000009814367371133109",
            "extra": "mean: 1.290352982337054 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1091.553783640485,
            "unit": "iter/sec",
            "range": "stddev: 0.00001125785777841341",
            "extra": "mean: 916.1252656418447 usec\nrounds: 911"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 989.4726296414993,
            "unit": "iter/sec",
            "range": "stddev: 0.000003512556899542533",
            "extra": "mean: 1.0106393749995033 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 615.0602731433529,
            "unit": "iter/sec",
            "range": "stddev: 0.00000929343646041989",
            "extra": "mean: 1.6258569178746627 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 642.5565153286375,
            "unit": "iter/sec",
            "range": "stddev: 0.000006141376306646033",
            "extra": "mean: 1.5562833402888256 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 804.3489713734538,
            "unit": "iter/sec",
            "range": "stddev: 0.000012302266965459796",
            "extra": "mean: 1.243241473029381 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 724.2379853081154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036952566678769167",
            "extra": "mean: 1.3807616008632384 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 499.3468687478108,
            "unit": "iter/sec",
            "range": "stddev: 0.000010074753321150608",
            "extra": "mean: 2.0026159421158565 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.8040295306441,
            "unit": "iter/sec",
            "range": "stddev: 0.000003931553224781811",
            "extra": "mean: 1.73369107843043 msec\nrounds: 561"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "58fbbeaecdaaeb68e56ac710dbb0702afada9f55",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/58fbbeaecdaaeb68e56ac710dbb0702afada9f55"
        },
        "date": 1609961035928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 724.6986319453848,
            "unit": "iter/sec",
            "range": "stddev: 0.000022063727793875793",
            "extra": "mean: 1.3798839350856709 msec\nrounds: 647"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 378.74454800298673,
            "unit": "iter/sec",
            "range": "stddev: 0.00006139126293679603",
            "extra": "mean: 2.640302032788903 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 886.7689411805281,
            "unit": "iter/sec",
            "range": "stddev: 0.00002111101039269247",
            "extra": "mean: 1.12768947305341 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 724.9470658467438,
            "unit": "iter/sec",
            "range": "stddev: 0.00003415874331939665",
            "extra": "mean: 1.3794110592502258 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 374.47734664790744,
            "unit": "iter/sec",
            "range": "stddev: 0.000045580483527372466",
            "extra": "mean: 2.670388500002442 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 309.0562187479025,
            "unit": "iter/sec",
            "range": "stddev: 0.00003925431329998144",
            "extra": "mean: 3.235657266666105 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 725.9324735674314,
            "unit": "iter/sec",
            "range": "stddev: 0.00003251655012510451",
            "extra": "mean: 1.377538595409192 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 371.66622560606623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000324554614848632",
            "extra": "mean: 2.6905861525871138 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 306.6246449384008,
            "unit": "iter/sec",
            "range": "stddev: 0.000049356606842717956",
            "extra": "mean: 3.261316454849526 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 724.2093182671575,
            "unit": "iter/sec",
            "range": "stddev: 0.000021568525617258825",
            "extra": "mean: 1.3808162568147246 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 368.8881236367076,
            "unit": "iter/sec",
            "range": "stddev: 0.000034099560825524875",
            "extra": "mean: 2.710848997092763 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 272.0782137675522,
            "unit": "iter/sec",
            "range": "stddev: 0.00005882067949069259",
            "extra": "mean: 3.6754137207558326 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 714.0022326509107,
            "unit": "iter/sec",
            "range": "stddev: 0.00003198429874953498",
            "extra": "mean: 1.400555844604647 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 366.83009801365154,
            "unit": "iter/sec",
            "range": "stddev: 0.00006297664888634353",
            "extra": "mean: 2.726057663792858 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 251.02351929935853,
            "unit": "iter/sec",
            "range": "stddev: 0.00022500037575091334",
            "extra": "mean: 3.9836904637108854 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1113.2120304539646,
            "unit": "iter/sec",
            "range": "stddev: 0.000038403533464987",
            "extra": "mean: 898.3014669651055 usec\nrounds: 893"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 972.8310208196407,
            "unit": "iter/sec",
            "range": "stddev: 0.000023431301381050097",
            "extra": "mean: 1.0279277475727167 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 561.0817816536443,
            "unit": "iter/sec",
            "range": "stddev: 0.00005304875440009362",
            "extra": "mean: 1.7822713777174464 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 639.2620714623856,
            "unit": "iter/sec",
            "range": "stddev: 0.00004850409648566263",
            "extra": "mean: 1.564303662991275 msec\nrounds: 635"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 931.4445334076432,
            "unit": "iter/sec",
            "range": "stddev: 0.000015005433983243784",
            "extra": "mean: 1.073601233496481 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 826.1554578215366,
            "unit": "iter/sec",
            "range": "stddev: 0.00001809321245302756",
            "extra": "mean: 1.2104259440915257 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 506.9421148689846,
            "unit": "iter/sec",
            "range": "stddev: 0.00004733712159217216",
            "extra": "mean: 1.972611804522184 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 529.921820982775,
            "unit": "iter/sec",
            "range": "stddev: 0.00002996624150975024",
            "extra": "mean: 1.8870708100780487 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 679.133391059861,
            "unit": "iter/sec",
            "range": "stddev: 0.000060002026808153515",
            "extra": "mean: 1.47246478109314 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 608.0297000835064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348510824489451",
            "extra": "mean: 1.644656502573247 msec\nrounds: 583"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 410.0062400647446,
            "unit": "iter/sec",
            "range": "stddev: 0.00005456850427263637",
            "extra": "mean: 2.4389872696622588 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 480.96380262043573,
            "unit": "iter/sec",
            "range": "stddev: 0.00004464734229802701",
            "extra": "mean: 2.0791585448877825 msec\nrounds: 479"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "cdfe82984730669829d2b9c533f9dff57fa76800",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/cdfe82984730669829d2b9c533f9dff57fa76800"
        },
        "date": 1609961082980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 869.0073641318805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033405442167224936",
            "extra": "mean: 1.1507382345361115 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.0436064763585,
            "unit": "iter/sec",
            "range": "stddev: 0.00000823191334752524",
            "extra": "mean: 2.236918245810734 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1059.9540871617987,
            "unit": "iter/sec",
            "range": "stddev: 0.000006763515544909383",
            "extra": "mean: 943.4370904476291 usec\nrounds: 984"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 866.8342987271386,
            "unit": "iter/sec",
            "range": "stddev: 0.000004505523167500234",
            "extra": "mean: 1.1536230182266694 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 442.2260560413428,
            "unit": "iter/sec",
            "range": "stddev: 0.000008510347571933111",
            "extra": "mean: 2.2612869285714634 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 369.1512022250256,
            "unit": "iter/sec",
            "range": "stddev: 0.000029593709379912585",
            "extra": "mean: 2.7089170886417007 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 868.1418019609873,
            "unit": "iter/sec",
            "range": "stddev: 0.000004825135542170044",
            "extra": "mean: 1.1518855534213042 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 438.5981155085761,
            "unit": "iter/sec",
            "range": "stddev: 0.00002925433350130068",
            "extra": "mean: 2.279991556371488 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 367.81636747199315,
            "unit": "iter/sec",
            "range": "stddev: 0.00001656419735215973",
            "extra": "mean: 2.7187479634824667 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 868.0991669507189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058359887046380015",
            "extra": "mean: 1.1519421260506393 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 435.7084565119959,
            "unit": "iter/sec",
            "range": "stddev: 0.000010433048263907748",
            "extra": "mean: 2.2951126723712507 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.1272383300803,
            "unit": "iter/sec",
            "range": "stddev: 0.00001688407299146616",
            "extra": "mean: 3.0852081582283857 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 854.3095580654649,
            "unit": "iter/sec",
            "range": "stddev: 0.000005069414876325657",
            "extra": "mean: 1.1705358913043684 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 435.9053272053058,
            "unit": "iter/sec",
            "range": "stddev: 0.00000967330024387095",
            "extra": "mean: 2.2940761160485037 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 302.5909325083541,
            "unit": "iter/sec",
            "range": "stddev: 0.000015824972747856518",
            "extra": "mean: 3.304791692567957 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1270.5807071563906,
            "unit": "iter/sec",
            "range": "stddev: 0.00013450749313283542",
            "extra": "mean: 787.0417001986747 usec\nrounds: 1004"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1154.654407019243,
            "unit": "iter/sec",
            "range": "stddev: 0.00014363112037034539",
            "extra": "mean: 866.0600036867431 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 676.3751789092935,
            "unit": "iter/sec",
            "range": "stddev: 0.000022936200092058027",
            "extra": "mean: 1.4784693927009211 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 763.4807087166607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000182394419405648",
            "extra": "mean: 1.3097907891882508 msec\nrounds: 740"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1087.8691812938966,
            "unit": "iter/sec",
            "range": "stddev: 0.00003608519457755102",
            "extra": "mean: 919.2281730148967 usec\nrounds: 919"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 975.9963088483477,
            "unit": "iter/sec",
            "range": "stddev: 0.000012088745804588577",
            "extra": "mean: 1.0245940388647332 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 603.9891011313583,
            "unit": "iter/sec",
            "range": "stddev: 0.000031491730364651225",
            "extra": "mean: 1.655659014586284 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 636.306009039391,
            "unit": "iter/sec",
            "range": "stddev: 0.000013314149295872221",
            "extra": "mean: 1.5715708885252633 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 797.606926293758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362108882466559",
            "extra": "mean: 1.2537503963847236 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 720.2347265260347,
            "unit": "iter/sec",
            "range": "stddev: 0.000021201697999431104",
            "extra": "mean: 1.3884362460879653 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 495.0686899510533,
            "unit": "iter/sec",
            "range": "stddev: 0.000019906847886734387",
            "extra": "mean: 2.0199217205573405 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.1988992335358,
            "unit": "iter/sec",
            "range": "stddev: 0.00001345449793888981",
            "extra": "mean: 1.73551181949533 msec\nrounds: 554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "ca6d91435eadfd8432c6356980e34f252d1dc301",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/ca6d91435eadfd8432c6356980e34f252d1dc301"
        },
        "date": 1609961333341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 742.1220685669143,
            "unit": "iter/sec",
            "range": "stddev: 0.000049104367809011305",
            "extra": "mean: 1.347487215857985 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 382.70589810064047,
            "unit": "iter/sec",
            "range": "stddev: 0.0003338246624237827",
            "extra": "mean: 2.6129725331200127 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 918.214966354504,
            "unit": "iter/sec",
            "range": "stddev: 0.000055251527723920386",
            "extra": "mean: 1.0890695933330283 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 736.0897748911057,
            "unit": "iter/sec",
            "range": "stddev: 0.00004621845625524493",
            "extra": "mean: 1.3585299431009432 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 377.98159345259114,
            "unit": "iter/sec",
            "range": "stddev: 0.000063275407945018",
            "extra": "mean: 2.645631473389263 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 313.94199032970846,
            "unit": "iter/sec",
            "range": "stddev: 0.00009427476026181128",
            "extra": "mean: 3.185301841750379 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 742.9367593540132,
            "unit": "iter/sec",
            "range": "stddev: 0.000057398538028263755",
            "extra": "mean: 1.3460095861584562 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 380.8042238133568,
            "unit": "iter/sec",
            "range": "stddev: 0.00008325473090744813",
            "extra": "mean: 2.6260212924794892 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 314.8110797774653,
            "unit": "iter/sec",
            "range": "stddev: 0.00010380716548602554",
            "extra": "mean: 3.176508275080036 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 749.3077115259357,
            "unit": "iter/sec",
            "range": "stddev: 0.00006644039252390825",
            "extra": "mean: 1.334565205479521 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 378.69747532879995,
            "unit": "iter/sec",
            "range": "stddev: 0.00009860089728109523",
            "extra": "mean: 2.6406302263614534 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 279.57486414246716,
            "unit": "iter/sec",
            "range": "stddev: 0.00011953617661694491",
            "extra": "mean: 3.576859468633829 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 732.3140784756378,
            "unit": "iter/sec",
            "range": "stddev: 0.00005469701276084867",
            "extra": "mean: 1.3655343101986634 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 378.8699817180726,
            "unit": "iter/sec",
            "range": "stddev: 0.0001519529657379832",
            "extra": "mean: 2.6394278994215146 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 260.4269791259283,
            "unit": "iter/sec",
            "range": "stddev: 0.0001398259823818197",
            "extra": "mean: 3.83984794262216 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1127.4880528169451,
            "unit": "iter/sec",
            "range": "stddev: 0.000039005321046518766",
            "extra": "mean: 886.9273581228415 usec\nrounds: 874"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1002.3529816747558,
            "unit": "iter/sec",
            "range": "stddev: 0.00004612270684314248",
            "extra": "mean: 997.6525418512504 usec\nrounds: 908"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 582.3749122965279,
            "unit": "iter/sec",
            "range": "stddev: 0.00007537047636202066",
            "extra": "mean: 1.7171069338420093 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 673.4544154076726,
            "unit": "iter/sec",
            "range": "stddev: 0.00005646069982821375",
            "extra": "mean: 1.4848814962400305 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 943.1646687541584,
            "unit": "iter/sec",
            "range": "stddev: 0.000048486944945165094",
            "extra": "mean: 1.060260242064534 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 843.663582021914,
            "unit": "iter/sec",
            "range": "stddev: 0.000042717563676596994",
            "extra": "mean: 1.1853065858353304 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 516.6168475208642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007821981333993488",
            "extra": "mean: 1.93567051635809 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 546.7981437885015,
            "unit": "iter/sec",
            "range": "stddev: 0.000052890719562067906",
            "extra": "mean: 1.8288284467673583 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 684.1081208177045,
            "unit": "iter/sec",
            "range": "stddev: 0.000026152168330603647",
            "extra": "mean: 1.461757242122363 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 613.8477098145612,
            "unit": "iter/sec",
            "range": "stddev: 0.00005202791019101622",
            "extra": "mean: 1.6290685523647104 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 418.799755110118,
            "unit": "iter/sec",
            "range": "stddev: 0.00007934384615963058",
            "extra": "mean: 2.3877759903108418 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 487.6276219220737,
            "unit": "iter/sec",
            "range": "stddev: 0.00005620511459071329",
            "extra": "mean: 2.050745189655821 msec\nrounds: 464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "83539a4f79190513e17d8628f3f46f6ed6b28c23",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/83539a4f79190513e17d8628f3f46f6ed6b28c23"
        },
        "date": 1609961780251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 867.6154226362286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057308282567332614",
            "extra": "mean: 1.1525843984671504 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 446.02670324929426,
            "unit": "iter/sec",
            "range": "stddev: 0.000011354657005327677",
            "extra": "mean: 2.2420182305566527 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1056.9857641304345,
            "unit": "iter/sec",
            "range": "stddev: 0.000009170096288054013",
            "extra": "mean: 946.0865358226316 usec\nrounds: 991"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 865.7564712633316,
            "unit": "iter/sec",
            "range": "stddev: 0.00001571073433750539",
            "extra": "mean: 1.1550592264598116 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 441.08585450144255,
            "unit": "iter/sec",
            "range": "stddev: 0.000010772973267238705",
            "extra": "mean: 2.2671323276288144 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 367.6811592960431,
            "unit": "iter/sec",
            "range": "stddev: 0.00003236852147752692",
            "extra": "mean: 2.719747734462612 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 867.8853416431637,
            "unit": "iter/sec",
            "range": "stddev: 0.000005118728482644655",
            "extra": "mean: 1.1522259358669478 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 438.9843449971711,
            "unit": "iter/sec",
            "range": "stddev: 0.000010299336945256826",
            "extra": "mean: 2.2779855623472045 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 367.8829574097958,
            "unit": "iter/sec",
            "range": "stddev: 0.000008508009602765362",
            "extra": "mean: 2.718255847024928 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 867.7332799967172,
            "unit": "iter/sec",
            "range": "stddev: 0.000005549660506598594",
            "extra": "mean: 1.1524278520281983 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 435.5660668411175,
            "unit": "iter/sec",
            "range": "stddev: 0.000012145810307633592",
            "extra": "mean: 2.2958629611630705 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 322.74297607409267,
            "unit": "iter/sec",
            "range": "stddev: 0.000038047008714547737",
            "extra": "mean: 3.09844078456545 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 849.3302981788325,
            "unit": "iter/sec",
            "range": "stddev: 0.0001840477716281246",
            "extra": "mean: 1.177398242055228 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 436.0961243458118,
            "unit": "iter/sec",
            "range": "stddev: 0.000009570311874205636",
            "extra": "mean: 2.2930724309923667 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 301.9054288188587,
            "unit": "iter/sec",
            "range": "stddev: 0.000014866671442366452",
            "extra": "mean: 3.312295522184842 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1287.619341734085,
            "unit": "iter/sec",
            "range": "stddev: 0.000013802814481328825",
            "extra": "mean: 776.6270415395148 usec\nrounds: 987"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1162.9819297389895,
            "unit": "iter/sec",
            "range": "stddev: 0.000004831274521560607",
            "extra": "mean: 859.8585880215974 usec\nrounds: 1102"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 660.1325216428512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004919889952380757",
            "extra": "mean: 1.5148473483950333 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 768.0993543732719,
            "unit": "iter/sec",
            "range": "stddev: 0.000020904227106474948",
            "extra": "mean: 1.3019149076305976 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1078.5284872000955,
            "unit": "iter/sec",
            "range": "stddev: 0.000013874027222307702",
            "extra": "mean: 927.1892322436854 usec\nrounds: 887"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 975.3426990041289,
            "unit": "iter/sec",
            "range": "stddev: 0.00001300928947762554",
            "extra": "mean: 1.0252806536831078 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 592.9950998818668,
            "unit": "iter/sec",
            "range": "stddev: 0.000047993914337149335",
            "extra": "mean: 1.6863545756098397 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 636.181021363336,
            "unit": "iter/sec",
            "range": "stddev: 0.000014341606583714351",
            "extra": "mean: 1.5718796481180781 msec\nrounds: 611"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 799.3954542631714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001423605581492436",
            "extra": "mean: 1.2509453170730527 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 720.1650328970667,
            "unit": "iter/sec",
            "range": "stddev: 0.000013916693180326766",
            "extra": "mean: 1.3885706113461498 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 487.5205828929806,
            "unit": "iter/sec",
            "range": "stddev: 0.00004503527895523353",
            "extra": "mean: 2.0511954471048823 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.0985637500704,
            "unit": "iter/sec",
            "range": "stddev: 0.000007480082857676273",
            "extra": "mean: 1.735814082733647 msec\nrounds: 556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "2e73472c5ddaf9f7e214094631c86215f34676d2",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/2e73472c5ddaf9f7e214094631c86215f34676d2"
        },
        "date": 1610125487652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 746.0319176481934,
            "unit": "iter/sec",
            "range": "stddev: 0.000055858205887428376",
            "extra": "mean: 1.3404252235647247 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 380.6723400837783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000696874647225126",
            "extra": "mean: 2.6269310761583577 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 886.3906960349634,
            "unit": "iter/sec",
            "range": "stddev: 0.000017657849572033946",
            "extra": "mean: 1.1281706864402323 msec\nrounds: 826"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 725.9974832042489,
            "unit": "iter/sec",
            "range": "stddev: 0.000027028107099791966",
            "extra": "mean: 1.3774152433510085 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 374.4987554218819,
            "unit": "iter/sec",
            "range": "stddev: 0.00005693890805361787",
            "extra": "mean: 2.6702358433033395 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 310.1575460814705,
            "unit": "iter/sec",
            "range": "stddev: 0.000048783655053838304",
            "extra": "mean: 3.2241678870432047 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 727.9487909212958,
            "unit": "iter/sec",
            "range": "stddev: 0.000029752930600607688",
            "extra": "mean: 1.3737230042437392 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 369.977421099066,
            "unit": "iter/sec",
            "range": "stddev: 0.00002453535025217134",
            "extra": "mean: 2.7028676426506513 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 308.3062934873912,
            "unit": "iter/sec",
            "range": "stddev: 0.00004158262813090475",
            "extra": "mean: 3.243527690234766 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 725.3234793195505,
            "unit": "iter/sec",
            "range": "stddev: 0.00025210355014669284",
            "extra": "mean: 1.3786952008476718 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 367.95567523367475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003330726579734636",
            "extra": "mean: 2.7177186474021298 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 271.5399099155772,
            "unit": "iter/sec",
            "range": "stddev: 0.000034283739627892146",
            "extra": "mean: 3.6826999033435044 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 716.5945305316143,
            "unit": "iter/sec",
            "range": "stddev: 0.00002959520632394996",
            "extra": "mean: 1.3954893002855295 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 370.30166161458396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000477130386438903",
            "extra": "mean: 2.7005009797682638 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 255.09878776797342,
            "unit": "iter/sec",
            "range": "stddev: 0.00007417939302802485",
            "extra": "mean: 3.9200499882796613 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1048.3813517319034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005089512892022362",
            "extra": "mean: 953.8513808434514 usec\nrounds: 877"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 971.3066488191694,
            "unit": "iter/sec",
            "range": "stddev: 0.000011326341186515893",
            "extra": "mean: 1.029540980920612 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 570.3497013148511,
            "unit": "iter/sec",
            "range": "stddev: 0.00005566841979336813",
            "extra": "mean: 1.7533102896252213 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 647.3581586772698,
            "unit": "iter/sec",
            "range": "stddev: 0.00004563832417014386",
            "extra": "mean: 1.5447399350666626 msec\nrounds: 616"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 937.0417510763416,
            "unit": "iter/sec",
            "range": "stddev: 0.00003628685681634366",
            "extra": "mean: 1.0671883070859338 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 834.3038610622241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000338951862396028",
            "extra": "mean: 1.1986040658217905 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 515.0949991333441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000623540533682742",
            "extra": "mean: 1.941389455697525 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 534.8685351684442,
            "unit": "iter/sec",
            "range": "stddev: 0.00004699988763204354",
            "extra": "mean: 1.869618297298183 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 686.3720062993201,
            "unit": "iter/sec",
            "range": "stddev: 0.000032272861580850994",
            "extra": "mean: 1.4569358756218125 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 608.6405341896284,
            "unit": "iter/sec",
            "range": "stddev: 0.000034666246218669615",
            "extra": "mean: 1.6430059186436625 msec\nrounds: 590"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 416.12445465711943,
            "unit": "iter/sec",
            "range": "stddev: 0.00006210163284220116",
            "extra": "mean: 2.4031272106417916 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 480.9067870329056,
            "unit": "iter/sec",
            "range": "stddev: 0.00003165857465521466",
            "extra": "mean: 2.0794050468070773 msec\nrounds: 470"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "6432445ac62aa8d2868b5d412131ace90d7e6171",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/6432445ac62aa8d2868b5d412131ace90d7e6171"
        },
        "date": 1610127199963,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 762.7125469775914,
            "unit": "iter/sec",
            "range": "stddev: 0.00010387792010563279",
            "extra": "mean: 1.311109937764509 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 383.57374137242863,
            "unit": "iter/sec",
            "range": "stddev: 0.0002306390576895613",
            "extra": "mean: 2.607060630433135 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 911.4086032475215,
            "unit": "iter/sec",
            "range": "stddev: 0.0001552656357739138",
            "extra": "mean: 1.0972027216298055 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 758.6834726597855,
            "unit": "iter/sec",
            "range": "stddev: 0.00010267605219256272",
            "extra": "mean: 1.3180727352530948 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 379.6480270283113,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760811666505737",
            "extra": "mean: 2.6340186931234273 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 307.7230676103832,
            "unit": "iter/sec",
            "range": "stddev: 0.0001679866761343015",
            "extra": "mean: 3.24967513084241 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 746.587836513307,
            "unit": "iter/sec",
            "range": "stddev: 0.00009985997692543608",
            "extra": "mean: 1.3394271257755432 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 385.4264127037142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001698371142661304",
            "extra": "mean: 2.5945289867010803 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 319.30441716610807,
            "unit": "iter/sec",
            "range": "stddev: 0.00016053419321906585",
            "extra": "mean: 3.1318075987648535 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 759.5304825064366,
            "unit": "iter/sec",
            "range": "stddev: 0.00009465832538529",
            "extra": "mean: 1.316602852725566 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 373.59141815528545,
            "unit": "iter/sec",
            "range": "stddev: 0.00017424827518281954",
            "extra": "mean: 2.676721015000254 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 280.46469492518764,
            "unit": "iter/sec",
            "range": "stddev: 0.00014398115854736908",
            "extra": "mean: 3.565511160920787 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 717.4180485376277,
            "unit": "iter/sec",
            "range": "stddev: 0.00006388082188647646",
            "extra": "mean: 1.3938874301230397 msec\nrounds: 737"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 374.27621360011443,
            "unit": "iter/sec",
            "range": "stddev: 0.00011573515588192246",
            "extra": "mean: 2.671823545453582 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 265.1416383657453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002249888350871393",
            "extra": "mean: 3.7715690608374626 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1131.81383080056,
            "unit": "iter/sec",
            "range": "stddev: 0.00007815300454148323",
            "extra": "mean: 883.5375331053123 usec\nrounds: 876"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1031.904403320511,
            "unit": "iter/sec",
            "range": "stddev: 0.00008838267906780895",
            "extra": "mean: 969.0820164950868 usec\nrounds: 970"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 592.7819043627602,
            "unit": "iter/sec",
            "range": "stddev: 0.0002875232234370233",
            "extra": "mean: 1.6869610773206691 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 676.0375863107421,
            "unit": "iter/sec",
            "range": "stddev: 0.0001922632505042705",
            "extra": "mean: 1.4792076953253126 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 962.6581051277903,
            "unit": "iter/sec",
            "range": "stddev: 0.00007143341672848991",
            "extra": "mean: 1.0387904019851915 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 851.1660363744526,
            "unit": "iter/sec",
            "range": "stddev: 0.00009565178380940293",
            "extra": "mean: 1.1748589079746494 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 512.7044538370809,
            "unit": "iter/sec",
            "range": "stddev: 0.00023461755487662306",
            "extra": "mean: 1.9504414141831588 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 540.8903094188613,
            "unit": "iter/sec",
            "range": "stddev: 0.00036754470725535246",
            "extra": "mean: 1.8488036901130864 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 670.4072501788455,
            "unit": "iter/sec",
            "range": "stddev: 0.0002431673025471425",
            "extra": "mean: 1.4916306464961835 msec\nrounds: 628"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 612.3284169778057,
            "unit": "iter/sec",
            "range": "stddev: 0.00019568661170083073",
            "extra": "mean: 1.6331105535418027 msec\nrounds: 607"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 434.5096632953954,
            "unit": "iter/sec",
            "range": "stddev: 0.00014559447679744064",
            "extra": "mean: 2.301444788168414 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 494.32608961999375,
            "unit": "iter/sec",
            "range": "stddev: 0.0002184865193599506",
            "extra": "mean: 2.02295614372435 msec\nrounds: 494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "b28d7c64236a9e55ec88ed603410beb49ab9774f",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/b28d7c64236a9e55ec88ed603410beb49ab9774f"
        },
        "date": 1610127590828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 723.9691640745745,
            "unit": "iter/sec",
            "range": "stddev: 0.000006350131895096546",
            "extra": "mean: 1.3812742995459848 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 373.2159139780252,
            "unit": "iter/sec",
            "range": "stddev: 0.000013808470247749857",
            "extra": "mean: 2.679414147540556 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 865.9440598216963,
            "unit": "iter/sec",
            "range": "stddev: 0.000008396527695849723",
            "extra": "mean: 1.1548090071844903 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 689.6965480822226,
            "unit": "iter/sec",
            "range": "stddev: 0.00032263591752270125",
            "extra": "mean: 1.449913012875895 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 353.1714932816168,
            "unit": "iter/sec",
            "range": "stddev: 0.00036991499041680293",
            "extra": "mean: 2.831485606916202 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 292.7831543581987,
            "unit": "iter/sec",
            "range": "stddev: 0.0003581379832131273",
            "extra": "mean: 3.415497049999582 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 693.0777294509238,
            "unit": "iter/sec",
            "range": "stddev: 0.000296128007578456",
            "extra": "mean: 1.4428396087582107 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 350.8122689737136,
            "unit": "iter/sec",
            "range": "stddev: 0.0003481094309200064",
            "extra": "mean: 2.850527442855569 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 290.53261135571717,
            "unit": "iter/sec",
            "range": "stddev: 0.00047199632118847217",
            "extra": "mean: 3.441954400002407 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 703.2587419085934,
            "unit": "iter/sec",
            "range": "stddev: 0.00015000415217599226",
            "extra": "mean: 1.4219517517636144 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 347.0570196376097,
            "unit": "iter/sec",
            "range": "stddev: 0.00040654804348193665",
            "extra": "mean: 2.881370908573412 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 255.7571183089119,
            "unit": "iter/sec",
            "range": "stddev: 0.00044491502463319315",
            "extra": "mean: 3.9099595999989605 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 686.1111165548041,
            "unit": "iter/sec",
            "range": "stddev: 0.00020231840724565934",
            "extra": "mean: 1.4574898669785998 msec\nrounds: 639"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 346.71079590835194,
            "unit": "iter/sec",
            "range": "stddev: 0.0004054220727219513",
            "extra": "mean: 2.884248231671262 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 239.10646712855953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005484052877386697",
            "extra": "mean: 4.182237360657977 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1056.0473815103533,
            "unit": "iter/sec",
            "range": "stddev: 0.00037845302673555865",
            "extra": "mean: 946.9272094305138 usec\nrounds: 912"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 969.4600678649799,
            "unit": "iter/sec",
            "range": "stddev: 0.000005303190999939956",
            "extra": "mean: 1.0315020011110694 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 554.7396862316635,
            "unit": "iter/sec",
            "range": "stddev: 0.00003633229330015279",
            "extra": "mean: 1.8026473043473448 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 653.6657189621872,
            "unit": "iter/sec",
            "range": "stddev: 0.000018124441838467368",
            "extra": "mean: 1.5298339365076103 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 921.8712211639935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747521996310244",
            "extra": "mean: 1.0847502091857883 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 824.7624365446002,
            "unit": "iter/sec",
            "range": "stddev: 0.000010989291653746846",
            "extra": "mean: 1.212470349873801 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 499.9376957381564,
            "unit": "iter/sec",
            "range": "stddev: 0.00003670199907171123",
            "extra": "mean: 2.0002492481058134 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 536.5398301811255,
            "unit": "iter/sec",
            "range": "stddev: 0.000005880000077142674",
            "extra": "mean: 1.8637945288468507 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 665.0720832812084,
            "unit": "iter/sec",
            "range": "stddev: 0.00022612481745142458",
            "extra": "mean: 1.5035964147921934 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 607.7251373709506,
            "unit": "iter/sec",
            "range": "stddev: 0.000012565311629955979",
            "extra": "mean: 1.6454807255892854 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 409.55213259861404,
            "unit": "iter/sec",
            "range": "stddev: 0.00003982368499918397",
            "extra": "mean: 2.4416915952921205 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 480.6258014879183,
            "unit": "iter/sec",
            "range": "stddev: 0.000013450199891228298",
            "extra": "mean: 2.080620717623162 msec\nrounds: 471"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "df7a82c1f7e8135f6837988c820798dc059defe5",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/df7a82c1f7e8135f6837988c820798dc059defe5"
        },
        "date": 1610128135625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 727.7043591200069,
            "unit": "iter/sec",
            "range": "stddev: 0.000026302182026880507",
            "extra": "mean: 1.3741844300744233 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 375.26346668525224,
            "unit": "iter/sec",
            "range": "stddev: 0.00003846776808156727",
            "extra": "mean: 2.664794441177878 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 863.5709643272493,
            "unit": "iter/sec",
            "range": "stddev: 0.00001858690996285071",
            "extra": "mean: 1.1579824256585949 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 727.9596591290064,
            "unit": "iter/sec",
            "range": "stddev: 0.000028721845393329534",
            "extra": "mean: 1.373702494993316 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 370.9809879879441,
            "unit": "iter/sec",
            "range": "stddev: 0.000038557753976541395",
            "extra": "mean: 2.6955559243712437 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 307.80889141368533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005312983898815248",
            "extra": "mean: 3.2487690508460068 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 727.445016291987,
            "unit": "iter/sec",
            "range": "stddev: 0.000025348895245209367",
            "extra": "mean: 1.3746743432202069 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 367.78598888700935,
            "unit": "iter/sec",
            "range": "stddev: 0.000027256639021997428",
            "extra": "mean: 2.7189725280894765 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 304.9381993866936,
            "unit": "iter/sec",
            "range": "stddev: 0.00002832265029914777",
            "extra": "mean: 3.2793530033667415 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 723.2797793383926,
            "unit": "iter/sec",
            "range": "stddev: 0.00004618198175773917",
            "extra": "mean: 1.382590843220769 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 365.48845315086174,
            "unit": "iter/sec",
            "range": "stddev: 0.00003220128085359983",
            "extra": "mean: 2.736064549725276 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 269.30023387221746,
            "unit": "iter/sec",
            "range": "stddev: 0.000029747655538686073",
            "extra": "mean: 3.7133276329589022 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 711.8966651673701,
            "unit": "iter/sec",
            "range": "stddev: 0.000007225859302872583",
            "extra": "mean: 1.404698250363198 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 365.78557946760907,
            "unit": "iter/sec",
            "range": "stddev: 0.00002092885767399097",
            "extra": "mean: 2.73384205428621 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 250.80225473194335,
            "unit": "iter/sec",
            "range": "stddev: 0.00004081283378838392",
            "extra": "mean: 3.9872049837382715 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1046.0446134654235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005283950883776177",
            "extra": "mean: 955.9821704803936 usec\nrounds: 874"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 963.0260857468226,
            "unit": "iter/sec",
            "range": "stddev: 0.00009572003157263794",
            "extra": "mean: 1.0383934711638723 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 559.5336112655056,
            "unit": "iter/sec",
            "range": "stddev: 0.00005710354542331344",
            "extra": "mean: 1.78720273432419 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 654.9123914103624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003360567007832615",
            "extra": "mean: 1.5269217884952322 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 933.971769363777,
            "unit": "iter/sec",
            "range": "stddev: 0.00003628348894470079",
            "extra": "mean: 1.0706961739124101 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 827.0672320377821,
            "unit": "iter/sec",
            "range": "stddev: 0.00002650528368310487",
            "extra": "mean: 1.2090915481394842 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 506.89194247108924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000451014070987382",
            "extra": "mean: 1.9728070545470058 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 538.1137977355451,
            "unit": "iter/sec",
            "range": "stddev: 0.00002370288065958184",
            "extra": "mean: 1.8583429828562918 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 682.7036006896169,
            "unit": "iter/sec",
            "range": "stddev: 0.00003522820395696208",
            "extra": "mean: 1.4647645024720444 msec\nrounds: 607"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 611.5683697453408,
            "unit": "iter/sec",
            "range": "stddev: 0.000038320594958140784",
            "extra": "mean: 1.635140156801117 msec\nrounds: 625"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 410.92787283074597,
            "unit": "iter/sec",
            "range": "stddev: 0.00003974317399045333",
            "extra": "mean: 2.43351708685841 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 481.822253503655,
            "unit": "iter/sec",
            "range": "stddev: 0.000022752645765296",
            "extra": "mean: 2.0754541591392357 msec\nrounds: 465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "e6e333b4ae5955299ee4a4ad33a74488601c88e8",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/e6e333b4ae5955299ee4a4ad33a74488601c88e8"
        },
        "date": 1610129060806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 868.3035761137113,
            "unit": "iter/sec",
            "range": "stddev: 0.00000524253367060146",
            "extra": "mean: 1.151670944942696 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 451.90849997676156,
            "unit": "iter/sec",
            "range": "stddev: 0.000009283483748287115",
            "extra": "mean: 2.2128373333350067 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1061.6713888526208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062934774339596135",
            "extra": "mean: 941.9110381044828 usec\nrounds: 971"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 866.6812402240279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037306225321358475",
            "extra": "mean: 1.1538267515072909 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 446.2048445307386,
            "unit": "iter/sec",
            "range": "stddev: 0.000021170481132690074",
            "extra": "mean: 2.2411231349396763 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.15969820653845,
            "unit": "iter/sec",
            "range": "stddev: 0.000007392833891780205",
            "extra": "mean: 2.7015366741574036 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 868.1341838547547,
            "unit": "iter/sec",
            "range": "stddev: 0.000004716975361600155",
            "extra": "mean: 1.1518956615205784 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 444.47642857135384,
            "unit": "iter/sec",
            "range": "stddev: 0.000012117353014554921",
            "extra": "mean: 2.249838092009114 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.4356476353285,
            "unit": "iter/sec",
            "range": "stddev: 0.000009859117155316096",
            "extra": "mean: 2.7141781920890113 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 868.4998644674059,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034487919406759407",
            "extra": "mean: 1.1514106575171827 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 441.5649738723332,
            "unit": "iter/sec",
            "range": "stddev: 0.000008403864293602512",
            "extra": "mean: 2.264672379311325 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 324.98347495265676,
            "unit": "iter/sec",
            "range": "stddev: 0.000006809474505158627",
            "extra": "mean: 3.0770795350307543 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 854.1460723852797,
            "unit": "iter/sec",
            "range": "stddev: 0.000009692870132204614",
            "extra": "mean: 1.1707599347818929 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 441.7383844791682,
            "unit": "iter/sec",
            "range": "stddev: 0.00001293155247549123",
            "extra": "mean: 2.263783350362569 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 303.38193431397013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066085268579123",
            "extra": "mean: 3.2961751735853175 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1325.3210409081905,
            "unit": "iter/sec",
            "range": "stddev: 0.000023332152213429286",
            "extra": "mean: 754.5341612585728 usec\nrounds: 986"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1156.5290033737915,
            "unit": "iter/sec",
            "range": "stddev: 0.00015806585939519058",
            "extra": "mean: 864.656223132174 usec\nrounds: 1098"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 673.2395036125736,
            "unit": "iter/sec",
            "range": "stddev: 0.000030497343473623248",
            "extra": "mean: 1.4853555007304888 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 775.2157437372286,
            "unit": "iter/sec",
            "range": "stddev: 0.000010592923784384125",
            "extra": "mean: 1.2899634818806844 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1093.7651902338625,
            "unit": "iter/sec",
            "range": "stddev: 0.00016165390269442582",
            "extra": "mean: 914.2730166665716 usec\nrounds: 900"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 981.4662065920928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065127526334329085",
            "extra": "mean: 1.0188837815132337 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 608.0648278700451,
            "unit": "iter/sec",
            "range": "stddev: 0.000026639282843554564",
            "extra": "mean: 1.6445614910877873 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 642.0857820102366,
            "unit": "iter/sec",
            "range": "stddev: 0.000008029088785353109",
            "extra": "mean: 1.557424300642834 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 815.6736194813893,
            "unit": "iter/sec",
            "range": "stddev: 0.000014107990924615946",
            "extra": "mean: 1.2259805590326762 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 728.8441114339239,
            "unit": "iter/sec",
            "range": "stddev: 0.000003955684043768362",
            "extra": "mean: 1.3720355070614558 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 490.3583926001736,
            "unit": "iter/sec",
            "range": "stddev: 0.00001932900048287928",
            "extra": "mean: 2.03932473694883 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.4856280667158,
            "unit": "iter/sec",
            "range": "stddev: 0.000006345179241075655",
            "extra": "mean: 1.7346486214297636 msec\nrounds: 560"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "8ccc875d25126da84ada02b391e1c20be98d2c68",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/8ccc875d25126da84ada02b391e1c20be98d2c68"
        },
        "date": 1610132480367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 868.1281571961977,
            "unit": "iter/sec",
            "range": "stddev: 0.000005487429705504884",
            "extra": "mean: 1.151903658130051 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 450.05656158730244,
            "unit": "iter/sec",
            "range": "stddev: 0.000017752531578238325",
            "extra": "mean: 2.2219429408452673 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1033.4148825591133,
            "unit": "iter/sec",
            "range": "stddev: 0.000005484451262024952",
            "extra": "mean: 967.6655686665109 usec\nrounds: 983"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 866.4376714932604,
            "unit": "iter/sec",
            "range": "stddev: 0.000004395844819604928",
            "extra": "mean: 1.1541511096540296 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 442.91970030419003,
            "unit": "iter/sec",
            "range": "stddev: 0.000019714961223583623",
            "extra": "mean: 2.2577455898060443 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 366.5426205778504,
            "unit": "iter/sec",
            "range": "stddev: 0.000007173823450466051",
            "extra": "mean: 2.7281956963790757 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 868.0181353359187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041344937637054475",
            "extra": "mean: 1.1520496626640235 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 440.44099435054306,
            "unit": "iter/sec",
            "range": "stddev: 0.000013600730262796279",
            "extra": "mean: 2.270451690071585 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 365.18934086025433,
            "unit": "iter/sec",
            "range": "stddev: 0.000006170488157303417",
            "extra": "mean: 2.738305553071075 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 868.2627698887495,
            "unit": "iter/sec",
            "range": "stddev: 0.000003775506105877904",
            "extra": "mean: 1.1517250706581947 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 437.5140650398144,
            "unit": "iter/sec",
            "range": "stddev: 0.000008103086246973144",
            "extra": "mean: 2.285640805419589 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 322.34404048940127,
            "unit": "iter/sec",
            "range": "stddev: 0.000006601116197788886",
            "extra": "mean: 3.1022754398739387 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 848.7130777562355,
            "unit": "iter/sec",
            "range": "stddev: 0.00006265333917968291",
            "extra": "mean: 1.1782544963767092 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 437.8167881433977,
            "unit": "iter/sec",
            "range": "stddev: 0.000013073760544319071",
            "extra": "mean: 2.2840604268296607 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 301.08387621986986,
            "unit": "iter/sec",
            "range": "stddev: 0.000014754037084435735",
            "extra": "mean: 3.3213336182431066 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1326.9166481824732,
            "unit": "iter/sec",
            "range": "stddev: 0.00001356053617611046",
            "extra": "mean: 753.6268396132771 usec\nrounds: 1035"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1159.6088791941445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037208563318361946",
            "extra": "mean: 862.3597300280569 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 662.5080384923234,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870997541339328",
            "extra": "mean: 1.5094156476587224 msec\nrounds: 684"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 775.0957542048166,
            "unit": "iter/sec",
            "range": "stddev: 0.000010403669575389181",
            "extra": "mean: 1.2901631760657966 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1100.2108170822605,
            "unit": "iter/sec",
            "range": "stddev: 0.00006284517493022166",
            "extra": "mean: 908.9167134822235 usec\nrounds: 890"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 983.0197213003944,
            "unit": "iter/sec",
            "range": "stddev: 0.000006645312412049554",
            "extra": "mean: 1.0172735890559175 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 588.7979357513367,
            "unit": "iter/sec",
            "range": "stddev: 0.00006560686557782028",
            "extra": "mean: 1.698375519479273 msec\nrounds: 616"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 641.4696638668037,
            "unit": "iter/sec",
            "range": "stddev: 0.00000872061859278477",
            "extra": "mean: 1.558920173982916 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 789.1536340876372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375420930322464",
            "extra": "mean: 1.2671803775650456 msec\nrounds: 731"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 727.8965496423632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054439945295901616",
            "extra": "mean: 1.3738215966146963 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 477.3688467738817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000792765972452266",
            "extra": "mean: 2.0948162134125945 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 573.1693787089755,
            "unit": "iter/sec",
            "range": "stddev: 0.00003300162458012577",
            "extra": "mean: 1.7446849694804547 msec\nrounds: 557"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "0beb1e629013d1c26a47db1cea8cafb3ca5b17be",
          "message": "Adding GPU ops",
          "timestamp": "2021-01-05T15:02:44Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/3/commits/0beb1e629013d1c26a47db1cea8cafb3ca5b17be"
        },
        "date": 1610136727203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 868.6361309171276,
            "unit": "iter/sec",
            "range": "stddev: 0.000002989028818899808",
            "extra": "mean: 1.1512300310881325 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 447.05763583019467,
            "unit": "iter/sec",
            "range": "stddev: 0.000009182788107779918",
            "extra": "mean: 2.2368480478875634 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1062.3396857355751,
            "unit": "iter/sec",
            "range": "stddev: 0.000005198413774728056",
            "extra": "mean: 941.3185005016446 usec\nrounds: 997"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 866.7823839355618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031089943877784223",
            "extra": "mean: 1.1536921129610103 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 442.701224945078,
            "unit": "iter/sec",
            "range": "stddev: 0.000007324271610316347",
            "extra": "mean: 2.2588597990079227 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 370.0896874218238,
            "unit": "iter/sec",
            "range": "stddev: 0.000011218089738640879",
            "extra": "mean: 2.70204773055514 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 868.3718817936542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034758927268213388",
            "extra": "mean: 1.151580355105998 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 439.9044093272317,
            "unit": "iter/sec",
            "range": "stddev: 0.000007767102466428456",
            "extra": "mean: 2.2732211334943226 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.80569631866626,
            "unit": "iter/sec",
            "range": "stddev: 0.000006171060490828063",
            "extra": "mean: 2.711454866293472 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 868.6390595451046,
            "unit": "iter/sec",
            "range": "stddev: 0.000003051493354547852",
            "extra": "mean: 1.1512261497009904 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 437.08076748242075,
            "unit": "iter/sec",
            "range": "stddev: 0.000008142667433301485",
            "extra": "mean: 2.2879066625603004 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 325.12255441004737,
            "unit": "iter/sec",
            "range": "stddev: 0.000011030417672308605",
            "extra": "mean: 3.0757632358498004 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 850.157318653615,
            "unit": "iter/sec",
            "range": "stddev: 0.00004856414951391771",
            "extra": "mean: 1.1762528864465807 msec\nrounds: 819"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 437.6480571155536,
            "unit": "iter/sec",
            "range": "stddev: 0.000007560922699739656",
            "extra": "mean: 2.284941024509031 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 303.4534434615577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070411277350031354",
            "extra": "mean: 3.295398426173018 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1267.4972775822712,
            "unit": "iter/sec",
            "range": "stddev: 0.00004195178821823455",
            "extra": "mean: 788.9563296794471 usec\nrounds: 1004"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1156.6935828945832,
            "unit": "iter/sec",
            "range": "stddev: 0.000010037115667183048",
            "extra": "mean: 864.5331959891546 usec\nrounds: 1097"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 679.3394993799528,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220707152507455",
            "extra": "mean: 1.4720180423966525 msec\nrounds: 684"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 771.5894274766279,
            "unit": "iter/sec",
            "range": "stddev: 0.000011890344483024505",
            "extra": "mean: 1.2960260527031275 msec\nrounds: 740"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1085.768461839686,
            "unit": "iter/sec",
            "range": "stddev: 0.00003490480938808972",
            "extra": "mean: 921.0066742090083 usec\nrounds: 884"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 990.5564946173994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034017686915913245",
            "extra": "mean: 1.0095335353752317 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 612.5818082121527,
            "unit": "iter/sec",
            "range": "stddev: 0.00002871282270782274",
            "extra": "mean: 1.6324350259739913 msec\nrounds: 616"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 636.3964939902097,
            "unit": "iter/sec",
            "range": "stddev: 0.00001450267053364291",
            "extra": "mean: 1.5713474373970764 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 797.5493012896159,
            "unit": "iter/sec",
            "range": "stddev: 0.00003156162633396779",
            "extra": "mean: 1.2538409831003887 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 724.1294370191541,
            "unit": "iter/sec",
            "range": "stddev: 0.000012548121068468446",
            "extra": "mean: 1.380968579480009 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 496.6527920525819,
            "unit": "iter/sec",
            "range": "stddev: 0.000008931279581293583",
            "extra": "mean: 2.013479066265125 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 576.4888688744431,
            "unit": "iter/sec",
            "range": "stddev: 0.000007356952252523401",
            "extra": "mean: 1.734638869875206 msec\nrounds: 561"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan Foreman-Mackey",
            "username": "dfm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9194b90e0f3afa41e496a5638c1f4fab61f2ec8",
          "message": "Adding GPU ops (#3)\n\n* strting to try to implement cuda\r\n\r\n* removing bit\r\n\r\n* git version\r\n\r\n* python install\r\n\r\n* syntax error\r\n\r\n* install cmake\r\n\r\n* set shell\r\n\r\n* don't install starry for theano-pymc\r\n\r\n* no sudo\r\n\r\n* don't update\r\n\r\n* cmake version\r\n\r\n* cuda include\r\n\r\n* cmake setup\r\n\r\n* add_cuda_library?\r\n\r\n* renaming\r\n\r\n* include kernel_helpers.h\r\n\r\n* typo\r\n\r\n* another typo\r\n\r\n* name of namespace\r\n\r\n* name of module\r\n\r\n* assignment\r\n\r\n* making things pointers\r\n\r\n* trying to get workflow running\r\n\r\n* working directory\r\n\r\n* workflow\r\n\r\n* fixing some bugs\r\n\r\n* running tests\r\n\r\n* typo\r\n\r\n* installing recent git for cuda tests\r\n\r\n* don't install git from source\r\n\r\n* just make sure that cuda builds\r\n\r\n* adding cuda op for quad\r\n\r\n* adding GPU translation rule\r\n\r\n* trying scikit-build\r\n\r\n* building using cmake\r\n\r\n* pybind11 global\r\n\r\n* try installing git again\r\n\r\n* adding pybind11 as submodule\r\n\r\n* python exec\r\n\r\n* python exec\r\n\r\n* submodule\r\n\r\n* providing python libraries and includes\r\n\r\n* non-interactive\r\n\r\n* adding language to extensions\r\n\r\n* Revert \"submodule\"\r\n\r\nThis reverts commit f3d3c376271710e2ab096f205d0cb4e4e0c7e608.\r\n\r\n* reverting\r\n\r\n* removing submodule\r\n\r\n* giving up on cmake setuptools\r\n\r\n* install pybind11 for sdist\r\n\r\n* adding option to build CUDA\r\n\r\n* cmake syntax\r\n\r\n* im an idiot\r\n\r\n* build loc\r\n\r\n* dummy extension\r\n\r\n* installdir\r\n\r\n* trying to make a faster GPU algorithm\r\n\r\n* typo\r\n\r\n* typo\r\n\r\n* test\r\n\r\n* trying a diff blocksize\r\n\r\n* cleanup\r\n\r\n* adding setup for Jenkins GPU CI\r\n\r\n* jenkins: add git to docker image\r\n\r\n* jenkins: add pytest to image; try pip install --user\r\n\r\n* jenkins: shouldn't need editable install for ci\r\n\r\n* setup: make cmake install to install_dir?\r\n\r\nalso add some debugging for cmake commands\r\n\r\n* try using venv for jenkins\r\n\r\n* switch back to user install\r\n\r\nCo-authored-by: Dylan Simon <dylan@dylex.net>",
          "timestamp": "2021-01-09T11:59:18-05:00",
          "tree_id": "29d8f4f27f258f1af31e9c294e0eeb7465edc1c1",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/c9194b90e0f3afa41e496a5638c1f4fab61f2ec8"
        },
        "date": 1610211868102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 706.7653430551508,
            "unit": "iter/sec",
            "range": "stddev: 0.0001433740004278592",
            "extra": "mean: 1.4148967685332126 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 357.46596862614047,
            "unit": "iter/sec",
            "range": "stddev: 0.0004204915415929787",
            "extra": "mean: 2.797469095710927 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 833.1048062252073,
            "unit": "iter/sec",
            "range": "stddev: 0.0002223948000836343",
            "extra": "mean: 1.2003291693046325 msec\nrounds: 821"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 706.8443554240271,
            "unit": "iter/sec",
            "range": "stddev: 0.00013727170062348572",
            "extra": "mean: 1.4147386087565381 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 365.6922622150463,
            "unit": "iter/sec",
            "range": "stddev: 0.00012989077243398414",
            "extra": "mean: 2.7345396753621967 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 292.7407378074253,
            "unit": "iter/sec",
            "range": "stddev: 0.000345414231172835",
            "extra": "mean: 3.415991937062868 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 694.5741410819369,
            "unit": "iter/sec",
            "range": "stddev: 0.00019560941361232835",
            "extra": "mean: 1.439731111271004 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 363.8317508766136,
            "unit": "iter/sec",
            "range": "stddev: 0.0002190049407356923",
            "extra": "mean: 2.7485231775143513 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 292.18566612903174,
            "unit": "iter/sec",
            "range": "stddev: 0.0003885475484635101",
            "extra": "mean: 3.4224813737385436 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 704.4560907844691,
            "unit": "iter/sec",
            "range": "stddev: 0.00025593106229780275",
            "extra": "mean: 1.4195348909346766 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 356.01720301738084,
            "unit": "iter/sec",
            "range": "stddev: 0.00033985526786528173",
            "extra": "mean: 2.8088530316080815 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 257.59259477945176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005099739995400869",
            "extra": "mean: 3.8820991762445267 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 691.646074252712,
            "unit": "iter/sec",
            "range": "stddev: 0.0002055672201340791",
            "extra": "mean: 1.4458261779052943 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 347.80087614353505,
            "unit": "iter/sec",
            "range": "stddev: 0.000688796173327244",
            "extra": "mean: 2.8752083982310235 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 236.7261237016672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005694915969227613",
            "extra": "mean: 4.22429085714361 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1092.3318602497911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000710482220485611",
            "extra": "mean: 915.472702381237 usec\nrounds: 168"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 944.8467135865086,
            "unit": "iter/sec",
            "range": "stddev: 0.00024293152116273476",
            "extra": "mean: 1.0583727345615006 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 548.4628079941441,
            "unit": "iter/sec",
            "range": "stddev: 0.00014430061305426207",
            "extra": "mean: 1.823277687063654 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 636.6855143679528,
            "unit": "iter/sec",
            "range": "stddev: 0.00017145420576659354",
            "extra": "mean: 1.5706341316602983 msec\nrounds: 638"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 887.8068314972387,
            "unit": "iter/sec",
            "range": "stddev: 0.00021356584256141634",
            "extra": "mean: 1.1263711480047451 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 793.2348731129733,
            "unit": "iter/sec",
            "range": "stddev: 0.00013774770737380904",
            "extra": "mean: 1.2606606616721185 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 491.19825407930966,
            "unit": "iter/sec",
            "range": "stddev: 0.00027307068231136684",
            "extra": "mean: 2.0358378550721365 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 516.2177986215111,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490769979978224",
            "extra": "mean: 1.937166836692503 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 646.5533703243747,
            "unit": "iter/sec",
            "range": "stddev: 0.00032476449970672116",
            "extra": "mean: 1.5466627287060646 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 587.7876759330026,
            "unit": "iter/sec",
            "range": "stddev: 0.00023449061736307327",
            "extra": "mean: 1.7012946016819557 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 402.2676042547917,
            "unit": "iter/sec",
            "range": "stddev: 0.00019791390260904442",
            "extra": "mean: 2.4859073647069314 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 462.89416445158633,
            "unit": "iter/sec",
            "range": "stddev: 0.00035293440711920993",
            "extra": "mean: 2.160321034041873 msec\nrounds: 470"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "81a5245862a42a7dec77c61860c58f11d1614dd4",
          "message": "Updating to aesara fallback",
          "timestamp": "2021-04-22T13:25:57Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/4/commits/81a5245862a42a7dec77c61860c58f11d1614dd4"
        },
        "date": 1619104163610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 727.0101173341435,
            "unit": "iter/sec",
            "range": "stddev: 0.00008397216951184738",
            "extra": "mean: 1.3754966762593026 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 488.6343715751609,
            "unit": "iter/sec",
            "range": "stddev: 0.00001331094000567608",
            "extra": "mean: 2.0465199711113278 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1029.3200260003055,
            "unit": "iter/sec",
            "range": "stddev: 0.000012456057538578574",
            "extra": "mean: 971.5151505268618 usec\nrounds: 950"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 729.2775493650058,
            "unit": "iter/sec",
            "range": "stddev: 0.000019781858622894022",
            "extra": "mean: 1.3712200531481007 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 476.05725208677006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007724796606070044",
            "extra": "mean: 2.1005876827136998 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 357.41767242357696,
            "unit": "iter/sec",
            "range": "stddev: 0.00007283401278207238",
            "extra": "mean: 2.797847104814942 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 730.5801582645843,
            "unit": "iter/sec",
            "range": "stddev: 0.000007569093429057214",
            "extra": "mean: 1.3687751969275952 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 478.398204347178,
            "unit": "iter/sec",
            "range": "stddev: 0.000016850771965946255",
            "extra": "mean: 2.090308849224465 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 354.4180115338408,
            "unit": "iter/sec",
            "range": "stddev: 0.00034749202291530965",
            "extra": "mean: 2.8215270315191567 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 731.8062653182669,
            "unit": "iter/sec",
            "range": "stddev: 0.000012543394427027865",
            "extra": "mean: 1.3664818783221184 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 475.66122816472495,
            "unit": "iter/sec",
            "range": "stddev: 0.00002338695879608328",
            "extra": "mean: 2.1023365807181 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 316.17770512116977,
            "unit": "iter/sec",
            "range": "stddev: 0.000026895252125860248",
            "extra": "mean: 3.1627783483872367 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 717.5919406078847,
            "unit": "iter/sec",
            "range": "stddev: 0.00000960826246527477",
            "extra": "mean: 1.3935496532373017 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 474.6566888607382,
            "unit": "iter/sec",
            "range": "stddev: 0.000013672792748672016",
            "extra": "mean: 2.1067858590599045 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 296.64787382678315,
            "unit": "iter/sec",
            "range": "stddev: 0.00003594043979805657",
            "extra": "mean: 3.3710000584191415 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1171.572349651269,
            "unit": "iter/sec",
            "range": "stddev: 0.0001366019557316284",
            "extra": "mean: 853.5537735229589 usec\nrounds: 914"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 973.6471976218575,
            "unit": "iter/sec",
            "range": "stddev: 0.000010779788910744799",
            "extra": "mean: 1.027066069149595 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 603.9429357090183,
            "unit": "iter/sec",
            "range": "stddev: 0.000019598138155902094",
            "extra": "mean: 1.6557855732280693 msec\nrounds: 635"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 808.1417184942605,
            "unit": "iter/sec",
            "range": "stddev: 0.000015079139980087955",
            "extra": "mean: 1.237406728442645 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 900.9337180488537,
            "unit": "iter/sec",
            "range": "stddev: 0.0004634280999158677",
            "extra": "mean: 1.1099595674648446 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 823.150651478634,
            "unit": "iter/sec",
            "range": "stddev: 0.00000618649467819322",
            "extra": "mean: 1.214844449437888 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 544.406864257588,
            "unit": "iter/sec",
            "range": "stddev: 0.000009385963537449276",
            "extra": "mean: 1.8368614829346575 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 705.4039267199593,
            "unit": "iter/sec",
            "range": "stddev: 0.000016538178387915743",
            "extra": "mean: 1.417627492732959 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 670.2413722893177,
            "unit": "iter/sec",
            "range": "stddev: 0.0002727439028490347",
            "extra": "mean: 1.4919998098361766 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 600.4813706291092,
            "unit": "iter/sec",
            "range": "stddev: 0.00001225796338579636",
            "extra": "mean: 1.6653305979373267 msec\nrounds: 582"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 440.2825249027882,
            "unit": "iter/sec",
            "range": "stddev: 0.00006848645792043404",
            "extra": "mean: 2.2712688863151995 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 619.1721317630168,
            "unit": "iter/sec",
            "range": "stddev: 0.00001704104378037876",
            "extra": "mean: 1.6150597688442834 msec\nrounds: 597"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "18a67d5eccb113d3366a8eb80e81b9c5c29d4b43",
          "message": "Updating to aesara fallback",
          "timestamp": "2021-04-22T13:25:57Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/4/commits/18a67d5eccb113d3366a8eb80e81b9c5c29d4b43"
        },
        "date": 1619104367863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 871.5740191000272,
            "unit": "iter/sec",
            "range": "stddev: 0.00011773970844458398",
            "extra": "mean: 1.1473494827583128 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 510.0630918452211,
            "unit": "iter/sec",
            "range": "stddev: 0.0002203980916105017",
            "extra": "mean: 1.9605417760817923 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 919.0723520586936,
            "unit": "iter/sec",
            "range": "stddev: 0.00011078019116907048",
            "extra": "mean: 1.0880536203270952 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 856.6906624336833,
            "unit": "iter/sec",
            "range": "stddev: 0.00013016912723228416",
            "extra": "mean: 1.1672824787878557 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 475.27277723165224,
            "unit": "iter/sec",
            "range": "stddev: 0.00021975768370306853",
            "extra": "mean: 2.104054866817232 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 350.5024165365297,
            "unit": "iter/sec",
            "range": "stddev: 0.00018672224595264183",
            "extra": "mean: 2.853047376624232 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 850.3460762740776,
            "unit": "iter/sec",
            "range": "stddev: 0.00013476106145197223",
            "extra": "mean: 1.1759917848761696 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 487.3051749962518,
            "unit": "iter/sec",
            "range": "stddev: 0.0001990007569931771",
            "extra": "mean: 2.0521021555079764 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 367.15750122874033,
            "unit": "iter/sec",
            "range": "stddev: 0.00022844918475455782",
            "extra": "mean: 2.7236267723071705 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 856.3582308458956,
            "unit": "iter/sec",
            "range": "stddev: 0.00014267273488689243",
            "extra": "mean: 1.1677356087442723 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 469.0259673282771,
            "unit": "iter/sec",
            "range": "stddev: 0.0002735118768156459",
            "extra": "mean: 2.13207811434476 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 323.5187600211661,
            "unit": "iter/sec",
            "range": "stddev: 0.0002204726646842791",
            "extra": "mean: 3.091010858024355 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 815.1956882952489,
            "unit": "iter/sec",
            "range": "stddev: 0.00022753094258958574",
            "extra": "mean: 1.2266993242950255 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 474.59005359959434,
            "unit": "iter/sec",
            "range": "stddev: 0.00014415596464995248",
            "extra": "mean: 2.1070816643024033 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 301.6112724554196,
            "unit": "iter/sec",
            "range": "stddev: 0.00041604986340599496",
            "extra": "mean: 3.315525947883156 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1155.0349622045512,
            "unit": "iter/sec",
            "range": "stddev: 0.00014017733364351528",
            "extra": "mean: 865.7746585361843 usec\nrounds: 861"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1021.2318527152523,
            "unit": "iter/sec",
            "range": "stddev: 0.00011361658127627668",
            "extra": "mean: 979.2095667024083 usec\nrounds: 937"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 541.0622429192448,
            "unit": "iter/sec",
            "range": "stddev: 0.00011021164222772294",
            "extra": "mean: 1.8482161952469731 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 872.9482673446371,
            "unit": "iter/sec",
            "range": "stddev: 0.00012993943449772375",
            "extra": "mean: 1.1455432554346354 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 969.3482950747424,
            "unit": "iter/sec",
            "range": "stddev: 0.00013606657521528313",
            "extra": "mean: 1.0316209406680745 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 871.376373223713,
            "unit": "iter/sec",
            "range": "stddev: 0.00012258258326298228",
            "extra": "mean: 1.1476097249463346 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 488.1819086126424,
            "unit": "iter/sec",
            "range": "stddev: 0.00018707138189993385",
            "extra": "mean: 2.048416752767194 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 735.8701389158095,
            "unit": "iter/sec",
            "range": "stddev: 0.00012535467964433793",
            "extra": "mean: 1.3589354250375545 msec\nrounds: 647"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 648.6509674292688,
            "unit": "iter/sec",
            "range": "stddev: 0.00018071553217469894",
            "extra": "mean: 1.5416611555567339 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 606.4899610728291,
            "unit": "iter/sec",
            "range": "stddev: 0.00012296115306079344",
            "extra": "mean: 1.6488319084970262 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 396.78311346611696,
            "unit": "iter/sec",
            "range": "stddev: 0.00024359918212864888",
            "extra": "mean: 2.5202685448593174 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 622.3351280061241,
            "unit": "iter/sec",
            "range": "stddev: 0.0001402209330109265",
            "extra": "mean: 1.6068512847794114 msec\nrounds: 611"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan Foreman-Mackey",
            "username": "dfm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92832474056f4b09d6195ea1689ed46fd9c904eb",
          "message": "Updating to aesara fallback (#4)\n\n* starting to update to aesara fallback\r\n\r\n* moving things around\r\n\r\n* syntax error\r\n\r\n* removing jax funcify\r\n\r\n* switching order of sin and cos in kepler\r\n\r\n* higher tol for contact point test\r\n\r\n* print version numbers and fix starry bench\r\n\r\n* radvel needs h5py installed\r\n\r\n* atol",
          "timestamp": "2021-04-22T11:23:41-04:00",
          "tree_id": "c02c53033742eabd003d7704178443d750fc334a",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/92832474056f4b09d6195ea1689ed46fd9c904eb"
        },
        "date": 1619105196485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 732.2560067171659,
            "unit": "iter/sec",
            "range": "stddev: 0.00001076163621459746",
            "extra": "mean: 1.3656426042623784 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 487.911256482156,
            "unit": "iter/sec",
            "range": "stddev: 0.000010775347039383542",
            "extra": "mean: 2.049553042104435 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1026.6338607495434,
            "unit": "iter/sec",
            "range": "stddev: 0.000007558353996175371",
            "extra": "mean: 974.0570988666807 usec\nrounds: 971"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 729.6764366734666,
            "unit": "iter/sec",
            "range": "stddev: 0.000004536563016849115",
            "extra": "mean: 1.3704704575070503 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 479.9226560463881,
            "unit": "iter/sec",
            "range": "stddev: 0.00001101367910056283",
            "extra": "mean: 2.083669081676658 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 355.67437795473165,
            "unit": "iter/sec",
            "range": "stddev: 0.00033189834398065636",
            "extra": "mean: 2.8115604102561322 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 730.663217457918,
            "unit": "iter/sec",
            "range": "stddev: 0.000012841796179910583",
            "extra": "mean: 1.3686195994361714 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 477.98292416186615,
            "unit": "iter/sec",
            "range": "stddev: 0.000011745496508792895",
            "extra": "mean: 2.092124947253044 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 357.4635530161846,
            "unit": "iter/sec",
            "range": "stddev: 0.000025483258686422923",
            "extra": "mean: 2.797487999999608 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 731.3549010043263,
            "unit": "iter/sec",
            "range": "stddev: 0.00001315695209398577",
            "extra": "mean: 1.3673252187505127 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 475.7730824253089,
            "unit": "iter/sec",
            "range": "stddev: 0.000014595740684829086",
            "extra": "mean: 2.1018423213486206 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 315.4359605865579,
            "unit": "iter/sec",
            "range": "stddev: 0.000015949771096765655",
            "extra": "mean: 3.1702155903229454 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 717.5682990771493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075557238146062195",
            "extra": "mean: 1.3935955661448265 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 474.76430960647974,
            "unit": "iter/sec",
            "range": "stddev: 0.000019945982973053268",
            "extra": "mean: 2.106308287640398 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 295.1015293249875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071872783893243866",
            "extra": "mean: 3.388664241379537 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1179.7501571535122,
            "unit": "iter/sec",
            "range": "stddev: 0.00008422407056857542",
            "extra": "mean: 847.6370983605449 usec\nrounds: 915"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 972.7268110494164,
            "unit": "iter/sec",
            "range": "stddev: 0.000005677398968469355",
            "extra": "mean: 1.0280378711070586 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 599.3537848062272,
            "unit": "iter/sec",
            "range": "stddev: 0.000009526257452969893",
            "extra": "mean: 1.668463644261966 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 804.4221385372798,
            "unit": "iter/sec",
            "range": "stddev: 0.00001100886775398248",
            "extra": "mean: 1.2431283925357262 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 937.4810643127165,
            "unit": "iter/sec",
            "range": "stddev: 0.00014197200355811865",
            "extra": "mean: 1.066688211706033 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 824.1144472217517,
            "unit": "iter/sec",
            "range": "stddev: 0.000014050989887978232",
            "extra": "mean: 1.2134236978506958 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 538.5050086057162,
            "unit": "iter/sec",
            "range": "stddev: 0.00001952154455298531",
            "extra": "mean: 1.8569929416054556 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 702.3683865106319,
            "unit": "iter/sec",
            "range": "stddev: 0.000013649233588376798",
            "extra": "mean: 1.4237542850810851 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 666.9128136402304,
            "unit": "iter/sec",
            "range": "stddev: 0.00010881395472016491",
            "extra": "mean: 1.4994463737196315 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 600.0683037322407,
            "unit": "iter/sec",
            "range": "stddev: 0.000009124676162362643",
            "extra": "mean: 1.666476955673724 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 438.4417505615722,
            "unit": "iter/sec",
            "range": "stddev: 0.000010394672689547805",
            "extra": "mean: 2.280804687781589 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 617.9025001259316,
            "unit": "iter/sec",
            "range": "stddev: 0.00000774206868951433",
            "extra": "mean: 1.6183783036906227 msec\nrounds: 596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "f7de5a26310aa017fae9e68d7ae8db755d3c21af",
          "message": "removing jaxify ops and tests",
          "timestamp": "2021-04-22T12:54:30-04:00",
          "tree_id": "579dbba2368094d77522172f4c9369f4eedb698c",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/f7de5a26310aa017fae9e68d7ae8db755d3c21af"
        },
        "date": 1619110655908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 1035.6948752245276,
            "unit": "iter/sec",
            "range": "stddev: 0.00022095942951119396",
            "extra": "mean: 965.535336633978 usec\nrounds: 1010"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 582.7367161524058,
            "unit": "iter/sec",
            "range": "stddev: 0.00036297989612202926",
            "extra": "mean: 1.7160408333331536 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1101.9744654771341,
            "unit": "iter/sec",
            "range": "stddev: 0.00016267452732536062",
            "extra": "mean: 907.4620432035318 usec\nrounds: 949"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 1023.636023368977,
            "unit": "iter/sec",
            "range": "stddev: 0.00014671125918301308",
            "extra": "mean: 976.9097385893216 usec\nrounds: 964"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 552.0013731710686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003423259757560712",
            "extra": "mean: 1.8115896963359435 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 421.4226210577806,
            "unit": "iter/sec",
            "range": "stddev: 0.0002755730523769757",
            "extra": "mean: 2.372914860360312 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 1005.3889256218196,
            "unit": "iter/sec",
            "range": "stddev: 0.00022612097355601094",
            "extra": "mean: 994.6399592391704 usec\nrounds: 1104"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 582.0084853913621,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897502281256948",
            "extra": "mean: 1.7181880077359462 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 428.3936721064371,
            "unit": "iter/sec",
            "range": "stddev: 0.00044711110978981665",
            "extra": "mean: 2.3343015201016875 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 982.9761106394778,
            "unit": "iter/sec",
            "range": "stddev: 0.00017575297285710387",
            "extra": "mean: 1.0173187213567654 msec\nrounds: 1091"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 554.2138957478244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666103795610647",
            "extra": "mean: 1.8043575010883792 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 347.83320006730236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005438137415126075",
            "extra": "mean: 2.8749412068960343 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 919.3298996566564,
            "unit": "iter/sec",
            "range": "stddev: 0.0001995326966554127",
            "extra": "mean: 1.0877488052694377 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 527.7955164664462,
            "unit": "iter/sec",
            "range": "stddev: 0.00022230205752285585",
            "extra": "mean: 1.8946731618618695 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 324.5268808433098,
            "unit": "iter/sec",
            "range": "stddev: 0.0004350955177777275",
            "extra": "mean: 3.081408841700317 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1373.5871416977554,
            "unit": "iter/sec",
            "range": "stddev: 0.00022317449497755116",
            "extra": "mean: 728.0207928883193 usec\nrounds: 956"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1257.4985278809497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002139352519479122",
            "extra": "mean: 795.229559182969 usec\nrounds: 1225"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 564.7803225424949,
            "unit": "iter/sec",
            "range": "stddev: 0.00018692639436460333",
            "extra": "mean: 1.770599930780624 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 959.0867577620023,
            "unit": "iter/sec",
            "range": "stddev: 0.00027190971803642483",
            "extra": "mean: 1.0426585414790497 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1073.2865537995983,
            "unit": "iter/sec",
            "range": "stddev: 0.00044725958521781744",
            "extra": "mean: 931.7176260709196 usec\nrounds: 1051"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 1072.0605084847127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018219330141264312",
            "extra": "mean: 932.7831704326413 usec\nrounds: 1062"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 498.3749093676928,
            "unit": "iter/sec",
            "range": "stddev: 0.00016463551833778735",
            "extra": "mean: 2.0065215587773833 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 759.3380802951963,
            "unit": "iter/sec",
            "range": "stddev: 0.00029686073694000514",
            "extra": "mean: 1.3169364555129979 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 698.7098765003074,
            "unit": "iter/sec",
            "range": "stddev: 0.00023865736475371785",
            "extra": "mean: 1.431209195165227 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 707.099833241294,
            "unit": "iter/sec",
            "range": "stddev: 0.00021911346146253553",
            "extra": "mean: 1.4142274584001429 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 446.91358833905787,
            "unit": "iter/sec",
            "range": "stddev: 0.00022815988796128975",
            "extra": "mean: 2.2375690202584186 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 753.3728455473532,
            "unit": "iter/sec",
            "range": "stddev: 0.00021695318222182927",
            "extra": "mean: 1.3273640082865783 msec\nrounds: 724"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "committer": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan F-M",
            "username": "dfm"
          },
          "distinct": true,
          "id": "1d2e2b2c71d444fb662f7b9f61c3fceeef106498",
          "message": "updating wheel building",
          "timestamp": "2021-04-22T13:00:25-04:00",
          "tree_id": "ae8e10e366f2634a8811c829bd680af2ee088bf8",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/1d2e2b2c71d444fb662f7b9f61c3fceeef106498"
        },
        "date": 1619110972264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 996.8125731834219,
            "unit": "iter/sec",
            "range": "stddev: 0.000019201872570693805",
            "extra": "mean: 1.0031976189931058 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 663.2136628977423,
            "unit": "iter/sec",
            "range": "stddev: 0.000024773441248241072",
            "extra": "mean: 1.5078097089115383 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1398.230871426002,
            "unit": "iter/sec",
            "range": "stddev: 0.00001352032762087251",
            "extra": "mean: 715.1894729517296 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 992.5517510488003,
            "unit": "iter/sec",
            "range": "stddev: 0.000015768806806341813",
            "extra": "mean: 1.007504141666497 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 651.5252139656852,
            "unit": "iter/sec",
            "range": "stddev: 0.000025536313208234885",
            "extra": "mean: 1.5348600154907717 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 488.1033967163774,
            "unit": "iter/sec",
            "range": "stddev: 0.00002085290977686765",
            "extra": "mean: 2.0487462425529293 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 993.8383973772953,
            "unit": "iter/sec",
            "range": "stddev: 0.000010271157765094558",
            "extra": "mean: 1.0061998033472694 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 647.7388078760309,
            "unit": "iter/sec",
            "range": "stddev: 0.00002092069102590366",
            "extra": "mean: 1.543832155555187 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 484.6605769190957,
            "unit": "iter/sec",
            "range": "stddev: 0.00002272533226162253",
            "extra": "mean: 2.063299652628709 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 993.8892484601939,
            "unit": "iter/sec",
            "range": "stddev: 0.00001294701253043036",
            "extra": "mean: 1.0061483224104428 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 645.0640169209369,
            "unit": "iter/sec",
            "range": "stddev: 0.00001679001001196272",
            "extra": "mean: 1.550233734588495 msec\nrounds: 584"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 429.1653469917059,
            "unit": "iter/sec",
            "range": "stddev: 0.000022047546013773827",
            "extra": "mean: 2.330104252381137 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 976.9644709089703,
            "unit": "iter/sec",
            "range": "stddev: 0.000013982048682330432",
            "extra": "mean: 1.0235786763766317 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 646.0144885550669,
            "unit": "iter/sec",
            "range": "stddev: 0.000032625020991611844",
            "extra": "mean: 1.5479528984507582 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 400.4561002354429,
            "unit": "iter/sec",
            "range": "stddev: 0.00006040256786216242",
            "extra": "mean: 2.4971526202549126 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1564.6902846114795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000174758774853206",
            "extra": "mean: 639.1041152583786 usec\nrounds: 1206"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1320.9051083977035,
            "unit": "iter/sec",
            "range": "stddev: 0.000012758083658175023",
            "extra": "mean: 757.0566527772985 usec\nrounds: 1224"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 787.9451847046859,
            "unit": "iter/sec",
            "range": "stddev: 0.000013496967974836839",
            "extra": "mean: 1.2691238164933898 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 1056.840731848799,
            "unit": "iter/sec",
            "range": "stddev: 0.000018934608429177407",
            "extra": "mean: 946.216369093417 usec\nrounds: 1016"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1221.8641498106506,
            "unit": "iter/sec",
            "range": "stddev: 0.0003953738045007518",
            "extra": "mean: 818.4215897937324 usec\nrounds: 1019"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 1120.608629864744,
            "unit": "iter/sec",
            "range": "stddev: 0.000007422413597558084",
            "extra": "mean: 892.3722103770507 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 711.7188978770091,
            "unit": "iter/sec",
            "range": "stddev: 0.000012482400682587205",
            "extra": "mean: 1.405049104334459 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 925.7910522094674,
            "unit": "iter/sec",
            "range": "stddev: 0.000026827337026096947",
            "extra": "mean: 1.0801573396215352 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 893.9290453088691,
            "unit": "iter/sec",
            "range": "stddev: 0.000015727687170865627",
            "extra": "mean: 1.1186570178559099 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 815.0604201436313,
            "unit": "iter/sec",
            "range": "stddev: 0.000008111145414896071",
            "extra": "mean: 1.2269029084049723 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 580.5533486188631,
            "unit": "iter/sec",
            "range": "stddev: 0.000012005744801524475",
            "extra": "mean: 1.72249458620642 msec\nrounds: 609"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 838.1491610853797,
            "unit": "iter/sec",
            "range": "stddev: 0.000011123796217638013",
            "extra": "mean: 1.1931050538844754 msec\nrounds: 798"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "15db0e6af02c85052bdbb27568a529de2da53e8f",
          "message": "Adding some docs to readme",
          "timestamp": "2021-04-22T17:00:31Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/7/commits/15db0e6af02c85052bdbb27568a529de2da53e8f"
        },
        "date": 1619137473319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 729.7679132681727,
            "unit": "iter/sec",
            "range": "stddev: 0.000028198089515552075",
            "extra": "mean: 1.3702986686844414 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 492.13848451256683,
            "unit": "iter/sec",
            "range": "stddev: 0.00004341340032724131",
            "extra": "mean: 2.0319483874349693 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1039.2652670994205,
            "unit": "iter/sec",
            "range": "stddev: 0.000025394658728130844",
            "extra": "mean: 962.2182436549529 usec\nrounds: 985"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 739.62899888608,
            "unit": "iter/sec",
            "range": "stddev: 0.00004298474267490094",
            "extra": "mean: 1.3520291950505623 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 479.41381523093247,
            "unit": "iter/sec",
            "range": "stddev: 0.00007911771861664596",
            "extra": "mean: 2.0858806488884816 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 361.5757526187236,
            "unit": "iter/sec",
            "range": "stddev: 0.00005944644772496894",
            "extra": "mean: 2.765672180054854 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 730.623279368952,
            "unit": "iter/sec",
            "range": "stddev: 0.000025154083503285216",
            "extra": "mean: 1.3686944123429954 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 483.76700257182466,
            "unit": "iter/sec",
            "range": "stddev: 0.00005841133825337036",
            "extra": "mean: 2.0671108088888936 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 368.1886725525678,
            "unit": "iter/sec",
            "range": "stddev: 0.00013982727841520756",
            "extra": "mean: 2.7159988194835787 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 743.4458934707676,
            "unit": "iter/sec",
            "range": "stddev: 0.000054996785621280765",
            "extra": "mean: 1.3450877982949276 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 485.86728087561374,
            "unit": "iter/sec",
            "range": "stddev: 0.00007179762398558424",
            "extra": "mean: 2.058175224719461 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 317.77320838356536,
            "unit": "iter/sec",
            "range": "stddev: 0.00005364151658244449",
            "extra": "mean: 3.146898396774088 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 721.9520068973266,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391116049056272",
            "extra": "mean: 1.385133624460187 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 479.04771655416783,
            "unit": "iter/sec",
            "range": "stddev: 0.000058697031461460184",
            "extra": "mean: 2.0874747242155487 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 296.9947441844285,
            "unit": "iter/sec",
            "range": "stddev: 0.00005348071265757763",
            "extra": "mean: 3.3670629517235415 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1186.4511761646702,
            "unit": "iter/sec",
            "range": "stddev: 0.000033972569023643775",
            "extra": "mean: 842.8496849171715 usec\nrounds: 968"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 984.5423036114671,
            "unit": "iter/sec",
            "range": "stddev: 0.000032497024922163255",
            "extra": "mean: 1.0157003882228641 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 612.8322216566297,
            "unit": "iter/sec",
            "range": "stddev: 0.00005662179929495761",
            "extra": "mean: 1.6317679858555165 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 818.1367887449943,
            "unit": "iter/sec",
            "range": "stddev: 0.000035888066997912934",
            "extra": "mean: 1.222289492120236 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 976.3479872250219,
            "unit": "iter/sec",
            "range": "stddev: 0.00002267259410924156",
            "extra": "mean: 1.0242249823674054 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 834.501733718273,
            "unit": "iter/sec",
            "range": "stddev: 0.00003724327427309478",
            "extra": "mean: 1.1983198591383621 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 550.2988136494448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000588698837534772",
            "extra": "mean: 1.8171945408499952 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 716.5168735927797,
            "unit": "iter/sec",
            "range": "stddev: 0.00004770024478816773",
            "extra": "mean: 1.395640545052025 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 681.2059205943425,
            "unit": "iter/sec",
            "range": "stddev: 0.00011470177931092415",
            "extra": "mean: 1.4679848923325773 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 608.4402022539439,
            "unit": "iter/sec",
            "range": "stddev: 0.000051456274132301315",
            "extra": "mean: 1.643546886440997 msec\nrounds: 590"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 450.50023736169936,
            "unit": "iter/sec",
            "range": "stddev: 0.00009566949817006269",
            "extra": "mean: 2.219754657303579 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 634.6578884155165,
            "unit": "iter/sec",
            "range": "stddev: 0.00006156886295419916",
            "extra": "mean: 1.5756520453824259 msec\nrounds: 639"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "committer": {
            "name": "exoplanet-dev",
            "username": "exoplanet-dev"
          },
          "id": "a2bd8caa4fd08eff64dac70da8a9502df1dfb410",
          "message": "Adding some docs to readme",
          "timestamp": "2021-04-22T17:00:31Z",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/pull/7/commits/a2bd8caa4fd08eff64dac70da8a9502df1dfb410"
        },
        "date": 1619181634708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 666.7504382047439,
            "unit": "iter/sec",
            "range": "stddev: 0.00019229584486002869",
            "extra": "mean: 1.4998115377209886 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 451.34547580974464,
            "unit": "iter/sec",
            "range": "stddev: 0.00028415402344603554",
            "extra": "mean: 2.215597704188641 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 870.1302104139456,
            "unit": "iter/sec",
            "range": "stddev: 0.00010765363085126265",
            "extra": "mean: 1.1492532819016497 msec\nrounds: 862"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 646.1499639984947,
            "unit": "iter/sec",
            "range": "stddev: 0.00045755434963862246",
            "extra": "mean: 1.5476283459211486 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 400.09533570868695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899755340149869",
            "extra": "mean: 2.4994042938008882 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 313.86554866763146,
            "unit": "iter/sec",
            "range": "stddev: 0.00042595590331842825",
            "extra": "mean: 3.1860776190474853 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 656.0965985726119,
            "unit": "iter/sec",
            "range": "stddev: 0.00015212848379133714",
            "extra": "mean: 1.5241658045104578 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 407.5846967760528,
            "unit": "iter/sec",
            "range": "stddev: 0.00014924599086360202",
            "extra": "mean: 2.4534777873406015 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 311.24819712788087,
            "unit": "iter/sec",
            "range": "stddev: 0.0003211095797844052",
            "extra": "mean: 3.212870015722968 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 648.4635714897399,
            "unit": "iter/sec",
            "range": "stddev: 0.00009602103054460165",
            "extra": "mean: 1.5421066717790517 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 403.15204477230526,
            "unit": "iter/sec",
            "range": "stddev: 0.0001631797492849559",
            "extra": "mean: 2.4804537468358525 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 282.06367213584997,
            "unit": "iter/sec",
            "range": "stddev: 0.0001560408203421384",
            "extra": "mean: 3.545298805861009 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 634.6518270071886,
            "unit": "iter/sec",
            "range": "stddev: 0.00010078293334625185",
            "extra": "mean: 1.5756670940595483 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 401.24359795144954,
            "unit": "iter/sec",
            "range": "stddev: 0.00017119627536979885",
            "extra": "mean: 2.492251602531488 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 264.5066911335714,
            "unit": "iter/sec",
            "range": "stddev: 0.00014214295169351902",
            "extra": "mean: 3.780622696969949 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 834.5244497403847,
            "unit": "iter/sec",
            "range": "stddev: 0.00016380882228733142",
            "extra": "mean: 1.198287240488992 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 678.8373901455061,
            "unit": "iter/sec",
            "range": "stddev: 0.00022969771089424997",
            "extra": "mean: 1.4731068360651938 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 457.52404595372025,
            "unit": "iter/sec",
            "range": "stddev: 0.00019501200257596502",
            "extra": "mean: 2.1856774716954495 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 588.7050948522195,
            "unit": "iter/sec",
            "range": "stddev: 0.00010676901108145394",
            "extra": "mean: 1.6986433593733825 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 706.2146697900707,
            "unit": "iter/sec",
            "range": "stddev: 0.00010165047858850771",
            "extra": "mean: 1.416000039049401 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 577.4352135600366,
            "unit": "iter/sec",
            "range": "stddev: 0.00028244632058134023",
            "extra": "mean: 1.7317960119452067 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 410.267010598069,
            "unit": "iter/sec",
            "range": "stddev: 0.00027845652609036285",
            "extra": "mean: 2.437437020691097 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 498.068202471271,
            "unit": "iter/sec",
            "range": "stddev: 0.0002633378690783407",
            "extra": "mean: 2.007757160642434 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 511.4288248549539,
            "unit": "iter/sec",
            "range": "stddev: 0.00047753333634289986",
            "extra": "mean: 1.9553062936638537 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 452.2637917500059,
            "unit": "iter/sec",
            "range": "stddev: 0.0002233909418482369",
            "extra": "mean: 2.2110989609196077 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 342.17276700560285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002480191153497774",
            "extra": "mean: 2.922500258425375 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 424.94736839499035,
            "unit": "iter/sec",
            "range": "stddev: 0.0003178990358646496",
            "extra": "mean: 2.353232598608531 msec\nrounds: 431"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "foreman.mackey@gmail.com",
            "name": "Dan Foreman-Mackey",
            "username": "dfm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a03da235849c47ca7ff565fe43c33e68cec4ddc",
          "message": "Adding some docs to readme (#7)\n\n* starting to write readme\r\n\r\n* more words in the readme and handling broadcasting",
          "timestamp": "2021-04-23T08:40:33-04:00",
          "tree_id": "f2c6ff6072694829b72a8d75a59cf7a9a516b883",
          "url": "https://github.com/exoplanet-dev/exoplanet-core/commit/9a03da235849c47ca7ff565fe43c33e68cec4ddc"
        },
        "date": 1619181789596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.0]",
            "value": 872.7341949054885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014310672949929191",
            "extra": "mean: 1.1458242450420926 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.0]",
            "value": 573.6280292586191,
            "unit": "iter/sec",
            "range": "stddev: 0.00019336157089913056",
            "extra": "mean: 1.7432899875768657 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.0]",
            "value": 1223.7954722126874,
            "unit": "iter/sec",
            "range": "stddev: 0.0001048576895463635",
            "extra": "mean: 817.1300047318746 usec\nrounds: 1268"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.25]",
            "value": 871.1311026785211,
            "unit": "iter/sec",
            "range": "stddev: 0.00013651663719831938",
            "extra": "mean: 1.1479328391848684 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.25]",
            "value": 553.8897469121335,
            "unit": "iter/sec",
            "range": "stddev: 0.00018774149883583283",
            "extra": "mean: 1.8054134519999252 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.25]",
            "value": 442.57048105211754,
            "unit": "iter/sec",
            "range": "stddev: 0.00025164705026586447",
            "extra": "mean: 2.2595271099480287 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.5]",
            "value": 857.3517154306503,
            "unit": "iter/sec",
            "range": "stddev: 0.0001379630380789703",
            "extra": "mean: 1.1663824565834071 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.5]",
            "value": 568.9338840978459,
            "unit": "iter/sec",
            "range": "stddev: 0.00019266513695114214",
            "extra": "mean: 1.7576734800840565 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.5]",
            "value": 426.4041963325064,
            "unit": "iter/sec",
            "range": "stddev: 0.00025564911131401914",
            "extra": "mean: 2.3451926800931586 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.75]",
            "value": 902.4786172785742,
            "unit": "iter/sec",
            "range": "stddev: 0.00014536718400219337",
            "extra": "mean: 1.108059493991671 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.75]",
            "value": 580.1042626460992,
            "unit": "iter/sec",
            "range": "stddev: 0.00021716389531856382",
            "extra": "mean: 1.7238280502173524 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.75]",
            "value": 384.2232697580646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946931383526251",
            "extra": "mean: 2.6026534015747513 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmark.py::test_numpy_kepler_benchmark[0.95]",
            "value": 869.6552848302105,
            "unit": "iter/sec",
            "range": "stddev: 0.00016288616406757317",
            "extra": "mean: 1.1498808981483253 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmark.py::test_kepler_dot_py_kepler_benchmark[0.95]",
            "value": 587.056171185572,
            "unit": "iter/sec",
            "range": "stddev: 0.00020851225938948951",
            "extra": "mean: 1.7034145096890463 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmark.py::test_radvel_kepler_benchmark[0.95]",
            "value": 366.66117285999394,
            "unit": "iter/sec",
            "range": "stddev: 0.0003006061530128704",
            "extra": "mean: 2.72731359090983 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.01]",
            "value": 1387.3819907368922,
            "unit": "iter/sec",
            "range": "stddev: 0.00010390375281414214",
            "extra": "mean: 720.7820244724824 usec\nrounds: 1185"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.01]",
            "value": 1099.1079878362605,
            "unit": "iter/sec",
            "range": "stddev: 0.00010527901265205041",
            "extra": "mean: 909.8287075218444 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.01]",
            "value": 731.8746567732682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760627703350465",
            "extra": "mean: 1.3663541847573442 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.01]",
            "value": 1010.6770221948805,
            "unit": "iter/sec",
            "range": "stddev: 0.00013155150741103326",
            "extra": "mean: 989.4357722987573 usec\nrounds: 953"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.1]",
            "value": 1082.8790219694229,
            "unit": "iter/sec",
            "range": "stddev: 0.0001061152744114675",
            "extra": "mean: 923.4641910241354 usec\nrounds: 869"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.1]",
            "value": 1002.2930785428972,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279735503231791",
            "extra": "mean: 997.7121676364054 usec\nrounds: 1032"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.1]",
            "value": 687.5255956731191,
            "unit": "iter/sec",
            "range": "stddev: 0.0001823152989020762",
            "extra": "mean: 1.4544913037324148 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.1]",
            "value": 842.9391892294668,
            "unit": "iter/sec",
            "range": "stddev: 0.00016308311824825235",
            "extra": "mean: 1.1863251973301927 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_benchmark[0.9]",
            "value": 725.7000388385175,
            "unit": "iter/sec",
            "range": "stddev: 0.0002663639894668821",
            "extra": "mean: 1.3779798077460483 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_exoplanet_benchmark[0.9]",
            "value": 740.3726567046522,
            "unit": "iter/sec",
            "range": "stddev: 0.0001808543111774725",
            "extra": "mean: 1.350671166667515 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_starry_benchmark[0.9]",
            "value": 517.5218490749315,
            "unit": "iter/sec",
            "range": "stddev: 0.00022562226961215235",
            "extra": "mean: 1.9322855678219122 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmark.py::test_quad_limbdark_batman_benchmark[0.9]",
            "value": 780.4194236475468,
            "unit": "iter/sec",
            "range": "stddev: 0.00016652855622705288",
            "extra": "mean: 1.2813622645707243 msec\nrounds: 858"
          }
        ]
      }
    ]
  }
}