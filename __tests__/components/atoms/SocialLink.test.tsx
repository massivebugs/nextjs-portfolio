import { render, screen } from "@testing-library/react"
import SocialLink from "@/components/atoms/SocialLink"

test("links to the correct specified url", () => {
  render(
    <SocialLink
      name="GitHub"
      label="Click to open my GitHub Profile"
      href="https://github.com/massivebugs"
      iconSrc="/github-icon.svg"
      iconSrcForDarkMode="/github-icon.svg/"
      alt="GitHub icon"
    />
  )

  const link = screen.getByRole("link", {
    name: /click to open my github profile/i
  })
  expect(link).toBeInTheDocument()

  expect(link).toHaveAttribute("href", "https://github.com/massivebugs")
})

test("displays both light/dark mode icon images", () => {
  render(
    <SocialLink
      name="GitHub"
      label="Click to open my GitHub Profile"
      href="https://github.com/massivebugs"
      iconSrc="/github-icon.svg"
      iconSrcForDarkMode="/github-icon.svg/"
      alt="GitHub icon"
    />
  )

  const img = screen.getAllByAltText(/github icon/i)
  expect(img.length).toBe(2)
})
