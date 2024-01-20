### Commands

```bash
git clone https://github.com/IsraelBoka/superset-engeem.git
cd superset-engeem
docker compose up
```

### What is apache superset

Apache Superset is an enterprise-ready business intelligence web application that supports data exploration and visualization. It is designed to be intuitive and accessible for users of all skill levels, offering a variety of visualization options from simple charts to complex geospatial analysis.

### References :

#### installation :

[install with docker](https://superset.apache.org/docs/installation/installing-superset-using-docker-compose/)
[official documentation](https://apache-superset.readthedocs.io/en/0.34.1/)
[contribute to apache article](https://preset.io/blog/tutorial-contributing-code-to-apache-superset/)
[restack docs](https://www.restack.io/docs/superset-knowledge-apache-superset-installation)

#### Problems & errors :

[official github issue with the same login error ](https://github.com/apache/superset/issues/10149)
[login problems restack docs](https://www.restack.io/docs/superset-knowledge-superset-login-problems)

#### Keycloak and SSO :

https://naween-banuka.medium.com/apache-superset-security-implementing-using-keycloak-2fbaa182fb2c

https://www.restack.io/docs/superset-knowledge-apache-superset-keycloak-integration

### Stack used (need to install):

- Version Control: Git
- Collaboration: Github
- Backend: Python 3
- Frontend: React and TypeScript
- Testing: Pre-commit hooks, integration tests, etc

## How does apache Superset repos works :

- the primary repository for the superset app is the **[apache/superset](https://github.com/apache/superset)**

But there is separate organization for codebase :

- [apache-superset/superset-ui](https://github.com/apache-superset/superset-ui) :

![Overview of Git Repos](https://images.contentful.com/ykljvmtfxwdz/4BQoiuMosBKehHpN78d8fk/f94b0180d6a6715c5d4d9da7e021ed43/Screen_Shot_2021-11-23_at_1.12.56_PM.png)
