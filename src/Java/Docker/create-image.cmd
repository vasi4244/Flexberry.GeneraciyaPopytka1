docker build --no-cache -f SQL\Dockerfile.PostgreSql -t generaciya_popytka_1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t generaciya_popytka_1-java/app ../../..
