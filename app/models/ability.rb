class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    return unless user.present?

    can :manage, :all
    if user.admin?
      can :manage, :all
    else
      can :read, :all
    end
  end
end
