window.BENCHMARK_DATA = {
  "lastUpdate": 1609864046084,
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
      }
    ]
  }
}