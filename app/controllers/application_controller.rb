class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include SessionHelper
  include RestaurantHelper

  before_filter :checkForMobile

  private

  def isMobileDevice?
  	request.user_agent =~ /Mobile|webOS/
  end

  helper_method :isMobileDevice?

  def checkForMobile
  	request.format = :mobile if isMobileDevice?
  end
end
