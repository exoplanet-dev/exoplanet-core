window.BENCHMARK_DATA = {
  "lastUpdate": 1609353144700,
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
      }
    ]
  }
}