describe('exports', () => {
  const fieldsExports = [
    'VuetifyCharField'
  ]

  const checkExports = (modules: object, expectedExports: string[]) => {
    expect(Object.keys(modules).sort()).toEqual(expectedExports.sort())
  }

  it('should import correct from index', async () => {
    checkExports(await import('@/index'), [
      ...fieldsExports
    ])
  })

  it('should import correct from fields', async () => {
    checkExports(await import('@/fields'), fieldsExports)
  })
})
