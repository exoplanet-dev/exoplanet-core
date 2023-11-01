import nox

ALL_PYTHON_VS = ["3.9", "3.10", "3.11"]


@nox.session(python=ALL_PYTHON_VS)
def test(session):
    session.install(".[test]")
    session.run("pytest", "-v", "tests", *session.posargs)


@nox.session(python=ALL_PYTHON_VS)
def test_comparison(session):
    session.install(".[test,comparison]")
    session.run("pytest", "-v", "tests/core_test.py", *session.posargs)


@nox.session(python=ALL_PYTHON_VS)
def test_pymc3(session):
    session.install(".[test,pymc3]")
    session.run("python", "-c", "import theano")
    session.run("python", "-c", "import exoplanet_core.pymc3.ops")
    session.run("pytest", "-v", "tests/pymc3_test.py", *session.posargs)


@nox.session(python=ALL_PYTHON_VS)
def test_pymc(session):
    session.install(".[test,pymc]")
    session.run("python", "-c", "import pytensor")
    session.run("python", "-c", "import exoplanet_core.pymc.ops")
    session.run("pytest", "-v", "tests/pymc_test.py", *session.posargs)


@nox.session(python=ALL_PYTHON_VS)
def test_pymc_jax(session):
    session.install(".[test,pymc,jax]")
    session.run("python", "-c", "import jax")
    session.run("python", "-c", "import pytensor")
    session.run("python", "-c", "import exoplanet_core.pymc.ops")
    session.run("pytest", "-v", "tests/pymc_jax_test.py", *session.posargs)


@nox.session(python=ALL_PYTHON_VS)
def test_jax(session):
    session.install(".[test,jax]")
    session.run("python", "-c", "import jax")
    session.run("python", "-c", "import exoplanet_core.jax.ops")
    session.run("pytest", "-v", "tests/jax_test.py", *session.posargs)


@nox.session(python=ALL_PYTHON_VS)
def test_all(session):
    session.install(".[test,pymc3,pymc,jax,comparison]")
    session.run("python", "-c", "import jax")
    session.run("python", "-c", "import aesara")
    session.run("python", "-c", "import theano")
    session.run("pytest", "-v", "tests", *session.posargs)
