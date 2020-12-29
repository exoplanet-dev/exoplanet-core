window.BENCHMARK_DATA = {
  "lastUpdate": 1609254601907,
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
      }
    ]
  }
}