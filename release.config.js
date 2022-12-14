module.exports = {
    branches: [
        "main"
    ],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                releaseRules: [
                    { type: "feat", release: "minor" },
                    { type: "fix", release: "patch" },
                    { type: "build", release: "patch" },
                    { type: "chore", release: "patch" },
                    { type: "ci", release: "patch" },
                    { type: "perf", release: "patch" },
                    { type: "refactor", release: "patch" }
                ]
            }
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                presetConfig: {
                    types: [
                        { type: "feat", section: "Features" },
                        { type: "feature", section: "Features" },
                        { type: "fix", section: "Bug Fixes" },
                        { type: "perf", section: "Performance Improvements" },
                        { type: "revert", section: "Reverts" },
                        { type: "docs", section: "Documentation" },
                        { type: "style", section: "Miscellaneous" },
                        { type: "chore", section: "Miscellaneous" },
                        { type: "refactor", section: "Miscellaneous" },
                        { type: "test", section: "Tests" },
                        { type: "build", section: "Build/CI/CD" },
                        { type: "ci", section: "Build/CI/CD" }
                    ]
                },
            }
        ],
        "@semantic-release/github"
    ],
    preset: "conventionalcommits"
}
