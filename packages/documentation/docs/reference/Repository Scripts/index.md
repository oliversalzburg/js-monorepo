# Full reference

## build

- Project: `yarn3-monorepo`
- Source:

    ```shell
    yarn workspaces foreach --worktree run build
    ```

- Description:

    _documentation pending_

## docs:build

- Project: `documentation`
- Source:

    ```shell
    .scripts/build.sh
    ```

- Description:

    _documentation pending_

## docs:publish

- Project: `documentation`
- Source:

    ```shell
    .scripts/publish.sh
    ```

- Description:

    _documentation pending_

## docs:scripts:build

- Project: `yarn3-monorepo`
- Source:

    ```shell
    nsd --docs-location "packages/documentation/docs/reference/Repository Scripts/"
    ```

- Description:

    _documentation pending_

## docs:scripts:check

- Project: `yarn3-monorepo`
- Source:

    ```shell
    nsd --docs-location "packages/documentation/docs/reference/Repository Scripts/" --check-only
    ```

- Description:

    _documentation pending_

## docs:serve

- Project: `documentation`
- Source:

    ```shell
    .scripts/serve.sh
    ```

- Description:

    _documentation pending_

## lint

- Project: `yarn3-monorepo`
- Source:

    ```shell
    yarn run lint:all
    ```

- Description:

    _documentation pending_

## lint:all

- Project: `yarn3-monorepo`
- Source:

    ```shell
    yarn run lint:eslint && yarn run lint:prettier && yarn run lint:tsc
    ```

- Description:

    _documentation pending_

## lint:eslint

- Project: `yarn3-monorepo`
- Source:

    ```shell
    eslint .
    ```

- Description:

    _documentation pending_

## lint:prettier

- Project: `yarn3-monorepo`
- Source:

    ```shell
    prettier --check .
    ```

- Description:

    _documentation pending_

## lint:tsc

- Project: `yarn3-monorepo`
- Source:

    ```shell
    tsc --noEmit
    ```

- Description:

    _documentation pending_

## test

- Project: `yarn3-monorepo`
- Source:

    ```shell
    echo this project has no tests.
    ```

- Description:

    _documentation pending_
