# Version Updates (2025)

## Latest Versions

This template has been updated to use the latest stable versions as of 2025:

### Runtime & Framework
- **Node.js**: 22.x (LTS) - Latest long-term support version
- **Nuxt**: 3.14.x - Latest stable version
- **Vue**: 3.6.x - Latest stable version
- **TypeScript**: 5.8.x - Latest stable version

### Package Manager
- **pnpm**: Latest stable version (recommended)
- **npm**: Compatible but pnpm is faster

### Code Quality & Tooling
- **Biome**: 2.0.x - Latest major version with type-aware rules
- **Vitest**: 2.2.x - Latest testing framework
- **Tailwind CSS**: 3.4.x - Latest utility-first CSS framework

### Key Improvements in 2025

#### Biome v2 Features
- **Type-aware linting** without TypeScript compiler dependency
- **Improved performance** with better Rust optimizations
- **Enhanced Vue.js support** with better SFC parsing
- **Better error messages** and suggestions

#### Node.js 22 Features
- **Improved performance** with V8 engine updates
- **Better ES modules support**
- **Enhanced security** features
- **Improved debugging** capabilities

#### Nuxt 3.14 Features
- **Better TypeScript integration**
- **Improved build performance**
- **Enhanced developer experience**
- **Better Vite integration**

## Migration Notes

### From Biome v1 to v2
- Configuration format remains mostly compatible
- Some rules have been renamed or moved
- Type-aware rules are now available without extra setup

### From Node.js 18/20 to 22
- Most packages are compatible
- Some legacy APIs may be deprecated
- Performance improvements are automatic

## Compatibility

This template is designed to work with:
- ✅ Node.js 22+ (recommended)
- ✅ Node.js 20+ (compatible)
- ❌ Node.js 18 (deprecated)

All dependencies are tested and compatible with the specified versions.
