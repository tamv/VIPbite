module	MobileHelper

	#FunctionDescription:
	def getCurrentUserInfo
		if(cookies[:user] != nil)
			@loginUser = Users.find_by(userId: cookies[:user]);
			return true;
		else
			return false;
		end
	end
end