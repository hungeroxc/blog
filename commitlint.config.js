module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'chore',
                'feat',
                'init',
                'fix',
                'test',
                'perf',
                'style',
                'merge',
                'config',
                'improvement',
            ],
        ],
    },
}
